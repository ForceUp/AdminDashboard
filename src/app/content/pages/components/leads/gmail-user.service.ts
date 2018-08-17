import { Injectable, NgZone } from '@angular/core';
import { GoogleAuthService } from 'ng-gapi/lib/GoogleAuthService';
import GoogleUser = gapi.auth2.GoogleUser;
import GoogleAuth = gapi.auth2.GoogleAuth;

import _ from 'lodash';
import { map } from 'rxjs/internal/operators/map';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs/internal/observable/of';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class GmailUserService {
	public readonly SESSION_STORAGE_KEY: string = 'Gmail_access_Token';
	private user: GoogleUser = undefined;

	constructor(
		private googleAuthService: GoogleAuthService,
		private ngZone: NgZone,
		private http: HttpClient
	) {}

	public setUser(user: GoogleUser): void {
		this.user = user;
	}

	public getCurrentUser(): GoogleUser {
		return this.user;
	}

	public getToken(): string {
		const token: string = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
		if (!token) {
			throw new Error('no token set , authentication required');
		}
		return sessionStorage.getItem(this.SESSION_STORAGE_KEY);
	}

	public signIn() {
		return this.googleAuthService.getAuth().pipe(
			switchMap((auth: any) => {
				return auth.signIn();
			}),
			tap((res: any) => {
				debugger;
				this.signInSuccessHandler(res);
			}),
			catchError(err => of(err))
		);
	}

	// TODO: Rework
	public signOut(): void {
		this.googleAuthService.getAuth().subscribe(auth => {
			try {
				auth.signOut();
			} catch (e) {
				console.error(e);
			}
			sessionStorage.removeItem(this.SESSION_STORAGE_KEY);
		});
	}

	public isUserSignedIn(): boolean {
		return !_.isEmpty(sessionStorage.getItem(this.SESSION_STORAGE_KEY));
	}

	public getUserContacts() {
		// const params  = new HttpParams().set('')
		return this.http.get(
			`https://people.googleapis.com/v1/people/me/connections?
			pageSize=10&personFields=names,emailAddresses,photos,phoneNumbers,birthdays,occupations`,
			{
				headers: new HttpHeaders({
					Authorization: `Bearer ${this.getToken()}`
				})
			}
		);
	}

	private signInSuccessHandler(res: GoogleUser) {
		this.ngZone.run(() => {
			this.user = res;
			sessionStorage.setItem(
				this.SESSION_STORAGE_KEY,
				res.getAuthResponse().access_token
			);
		});
	}

	private signInErrorHandler(err) {
		console.warn(err);
	}
}
