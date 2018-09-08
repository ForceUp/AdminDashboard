import {
	ChangeDetectionStrategy,
	Component,
	OnInit,
	OnDestroy
} from '@angular/core';
import { AuthenticationService } from '../../../../core/auth/authentication.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'm-dashboard',
	templateUrl: './dashboard.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit, OnDestroy {
	public config: any;
	onDashboardData$: Subscription;
	dashboardData: any;
	constructor(private authService: AuthenticationService) {
		// this.subheaderService.setTitle('Dashboard');
	}

	ngOnInit(): void {
		this.onDashboardData$ = this.authService.onDashboardData$.subscribe(
			data => {
				debugger;
				this.dashboardData = data;
			}
		);
	}

	ngOnDestroy(): void {
		this.onDashboardData$.unsubscribe();
	}
}
