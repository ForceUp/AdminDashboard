import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	OnDestroy
} from '@angular/core';
import { Subscription, Subject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { DashboardDataModel } from './dashboard.model';
import { DashboardService } from './dashboard.service';

@Component({
	selector: 'm-dashboard',
	templateUrl: './dashboard.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
	public config: any;

	dashboardData$: Observable<DashboardDataModel>;
	constructor(
		private dashboardService: DashboardService,
		private http: HttpClient
	) {
		// this.subheaderService.setTitle('Dashboard');
	}

	ngOnInit(): void {
		this.dashboardData$ = this.dashboardService
			.getDashboardData();

	}

	/**
	 *  @Error REPEATED CODE
	 */
	prepareData() {
		// const headers = new Headers();
		// headers.append('Content-Type', 'application/json');
		// this.http
		// 	.post('https://app.forceupapp.com/users/web/homepage', {
		// 		data: {
		// 			userName: 'katty',
		// 			password: '',
		// 			startDate: 1546496046084,
		// 			endDate: 1546496046084
		// 		}
		// 	})
		// 	.subscribe((data: any) => {
		// 		console.log(data);
		// 		this.toShowSales = data.objHomePageSales ? true : false;
		// 		this.objHomePageSales.next(data.objHomePageSales);
		// 	});
	}

	ngOnDestroy(): void {
	}
}
