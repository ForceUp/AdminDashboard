import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
	MatSnackBarModule,
	MatSidenavModule
} from '@angular/material';
import { GoogleApiModule, NG_GAPI_CONFIG } from 'ng-gapi';

import { Routes, RouterModule } from '@angular/router';

import { LayoutModule } from '@angular/cdk/layout';
import { PartialsModule } from '../../../partials/partials.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { gapiClientConifg } from '../../../../config/google-api-config';

import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { AssignLeadComponent } from './assign-lead.component';
import { AssignLeadSidebarComponent } from './assign-lead-sidebar/assign-lead-sidebar.component';
import { LeadsTableComponent } from './leads-table/leads-table.component';
import { LeadsScheduleComponent } from './leads-schedule/leads-schedule.component';
import { CoreModule } from '../../../../core/core.module';

const routes: Routes = [
	{
		path: '',
		component: AssignLeadComponent
	}
];

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		HttpClientModule,
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
		MatSidenavModule,
		CoreModule,
		MatIconModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatSnackBarModule,
		MatTooltipModule,
		GoogleApiModule.forRoot({
			provide: NG_GAPI_CONFIG,
			useValue: gapiClientConifg
		}),
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyBTcUKY4GHzObREG7UXX3HxscIJ2WZmjzw'
		}),
		AgmDirectionModule,
		RouterModule.forChild(routes)
	],
	providers: [],
	declarations: [
		AssignLeadSidebarComponent,
		AssignLeadComponent,
		LeadsTableComponent,
		LeadsScheduleComponent
	]
})
export class AssignLeadModule {}
