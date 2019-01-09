import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	OnDestroy
} from '@angular/core';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { Subscription, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Component({
	selector: 'm-dashboard',
	templateUrl: './dashboard.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
	public config: any;
	onDashboardData$: Subscription;
	dashboardData: any;
	objHomePageSales: Subject<any> = new Subject<any>();
	toShowSales = false;
	constructor(private authService: AuthenticationService, private http: HttpClient) {
		// this.subheaderService.setTitle('Dashboard');
	}

	ngOnInit(): void {
		this.onDashboardData$ = this.authService.onDashboardData$.subscribe(
			data => {
				console.log('resolver', data);
				this.dashboardData = data;
			}
		);
		this.prepareData();
	}

	prepareData() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('https://app.forceupapp.com/users/web/homepage',
			{
				'data': { 'userName': 'katty', 'password': '', 'startDate': 1546496046084, 'endDate': 1546496046084 }
			}).subscribe((data: any) => {
				console.log(data);
				this.toShowSales = (data.objHomePageSales) ? true : false;
				this.objHomePageSales.next(data.objHomePageSales);
			});
	}

	ngOnDestroy(): void {
		this.onDashboardData$.unsubscribe();
	}
}
