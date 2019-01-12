import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class DashboardService {
	constructor(private http: HttpClient) {}

	getDashboardData(): Observable<any> {
		// return this.http.get(
		// 	'https://api.forceupapp.com/users/webAction/teamresult'
		// );
		return this.http.post('https://app.forceupapp.com/users/web/homepage', {
			data: {
				userName: 'katty',
				password: '',
				startDate: moment(),
				endDate: moment()
			}
		});
	}

	/**
	 *  @Error REPEATED CODE
	 */
	getSalesPerformanceData(): Observable<any> {
		return this.http
			.post('https://app.forceupapp.com/users/web/homepage', {
				data: {
					userName: 'katty',
					password: '',
					startDate: 1546496046084,
					endDate: 1546496046084
				}
			})
			.pipe(catchError((error: any) => throwError(error)));
	}
}
