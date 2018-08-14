import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import {
	MatSortModule,
	MatProgressSpinnerModule,
	MatTableModule,
	MatPaginatorModule,
	MatSelectModule,
	MatProgressBarModule,
	MatButtonModule,
	MatCheckboxModule,
	MatIconModule,
	MatTooltipModule,
	MatInputModule,
	MatMenuModule,
	MatDialogModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MAT_DIALOG_DEFAULT_OPTIONS,
	MatSnackBarModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileCalendarComponent } from './profile-calendar/profile-calendar.component';
import { FullCalendarModule } from 'ng-fullcalendar';
import { ProfileSalesMetricsComponent } from './profile-sales-metrics/profile-sales-metrics.component';
import { ProfilePipelineBreakupComponent } from './profile-sales-metrics/profile-pipeline-breakup/profile-pipeline-breakup.component';
import { ProfileSalesPerformanceComponent } from './profile-sales-metrics/profile-sales-performance/profile-sales-performance.component';
import { ProfileDealStageFunnelComponent } from './profile-sales-metrics/profile-deal-stage-funnel/profile-deal-stage-funnel.component';
import { ProfileLostDealsComponent } from './profile-sales-metrics/profile-lost-deals/profile-lost-deals.component';
// tslint:disable-next-line:max-line-length
import { ProfileBestEverVsCurrentComponent } from './profile-sales-metrics/profile-best-ever-vs-current/profile-best-ever-vs-current.component';
import { ProfileProspectsComponent } from './profile-prospects/profile-prospects.component';
import { ProfileActivityComponent } from './profile-activity/profile-activity.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
const routes: Routes = [
	{
		path: '',
		component: ProfileComponent,
		children: [
			{ path: '', redirectTo: 'calendar', pathMatch: 'full' },
			{ path: 'calendar', component: ProfileCalendarComponent },
			{ path: 'sales-metrics', component: ProfileSalesMetricsComponent },
			{ path: 'prospects', component: ProfileProspectsComponent },
			{ path: 'activity', component: ProfileActivityComponent }
		]
	}
];

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		PerfectScrollbarModule,
		ListTimelineModule,
		WidgetChartsModule,
		NgbModule,
		ChartsModule,
		MatSortModule,
		MatProgressSpinnerModule,
		MatTableModule,
		MatPaginatorModule,
		MatSelectModule,
		MatProgressBarModule,
		MatButtonModule,
		MatCheckboxModule,
		MatIconModule,
		MatTooltipModule,
		MatInputModule,
		MatPaginatorModule,
		MatProgressSpinnerModule,
		MatSortModule,
		MatTableModule,
		MatSelectModule,
		MatMenuModule,
		MatProgressBarModule,
		MatButtonModule,
		MatCheckboxModule,
		MatDialogModule,
		MatTabsModule,
		MatNativeDateModule,
		MatCardModule,
		MatRadioModule,
		MatIconModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatSnackBarModule,
		MatTooltipModule,
		FullCalendarModule,
		RouterModule.forChild(routes)
	],
	declarations: [
		ProfileCalendarComponent,
		ProfileComponent,
		ProfileSalesMetricsComponent,
		ProfilePipelineBreakupComponent,
		ProfileSalesPerformanceComponent,
		ProfileDealStageFunnelComponent,
		ProfileLostDealsComponent,
		ProfileBestEverVsCurrentComponent,
		ProfileProspectsComponent,
		ProfileActivityComponent
	]
})
export class ProfileModule {}
