import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
	MatButtonToggleModule,
	MatTabsModule,
	MatNativeDateModule,
	MatCardModule,
	MatRadioModule,
	MatSidenavModule,
	MatDatepickerModule,
	MatAutocompleteModule,
	MatSnackBarModule,
	MatFormFieldModule
} from '@angular/material';
import { UserOnboardingComponent } from './user-onboarding.component';
import { RouterModule } from '@angular/router';
import { CreateRepModalComponent } from './create-rep-modal/create-rep-modal.component';

@NgModule({
	imports: [
		PerfectScrollbarModule,
		CommonModule,
		HttpClientModule,
		LayoutModule,
		PartialsModule,
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
		MatMenuModule,
		MatDialogModule,
		MatButtonToggleModule,
		MatTabsModule,
		MatNativeDateModule,
		MatCardModule,
		MatRadioModule,
		MatDatepickerModule,
		MatAutocompleteModule,
		MatSnackBarModule,
		MatInputModule,
		MatAutocompleteModule,
		MatSidenavModule,
		MatFormFieldModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild([
			{
				path: '',
				component: UserOnboardingComponent
			}
		])
	],
	declarations: [UserOnboardingComponent, CreateRepModalComponent],
	entryComponents: [CreateRepModalComponent]
})
export class UserOnboardingModule {}
