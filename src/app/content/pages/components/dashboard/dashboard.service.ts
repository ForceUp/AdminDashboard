import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DashboardService {
	constructor(private http: HttpClient) {}

	getDashboardData(): Observable<any> {
		return this.http.get(
			'https://api.forceupapp.com/users/webAction/teamresult'
		);
	}
}
