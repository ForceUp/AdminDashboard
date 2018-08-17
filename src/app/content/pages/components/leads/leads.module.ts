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
	MatSnackBarModule
} from '@angular/material';
import {
	GoogleApiModule,
	GoogleApiService,
	GoogleAuthService,
	NgGapiClientConfig,
	NG_GAPI_CONFIG,
	GoogleApiConfig
} from 'ng-gapi';
import { ImportLeadsComponent } from './import-leads/import-leads.component';
import { Routes, RouterModule } from '@angular/router';
import { LeadsComponent } from './leads.component';
import { LayoutModule } from '@angular/cdk/layout';
import { PartialsModule } from '../../../partials/partials.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';
import { ImportGmailContactsComponent } from './import-gmail-contacts/import-gmail-contacts.component';
import { gapiClientConifg } from '../../../../config/google-api-config';
import { GmailUserService } from './gmail-user.service';

const routes: Routes = [
	{
		path: '',
		component: LeadsComponent,
		children: [
			{ path: '', redirectTo: 'import', pathMatch: 'full' },
			{ path: 'import', component: ImportLeadsComponent },
			{
				path: 'import-gmail-contacts',
				component: ImportGmailContactsComponent
			}
		]
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
		MatIconModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatSnackBarModule,
		MatTooltipModule,
		GoogleApiModule.forRoot({
			provide: NG_GAPI_CONFIG,
			useValue: gapiClientConifg
		}),
		RouterModule.forChild(routes)
	],
	providers: [GmailUserService],
	declarations: [
		LeadsComponent,
		ImportLeadsComponent,
		ImportGmailContactsComponent
	]
})
export class LeadsModule {}
