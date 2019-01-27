import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root'
})
export class PipelineService {
	constructor(private http: HttpClient) {}

	getPipelineData(): Observable<any> {
		// return this.http.get(
		// 	'https://api.forceupapp.com/users/webAction/teamresult'
		// );
		return this.http.post('https://app.forceupapp.com/users/web/saledetails', {
			data: {
				userName: 'katty',
				password: '',
				startDate: moment(),
				endDate: moment()
			}
		});
	}
}
