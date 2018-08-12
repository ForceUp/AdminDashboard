import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';

import { TeamBoardComponent } from './team-board.component';
import { TopFivePersonsComponent } from './top-five-persons/top-five-persons.component';
import { AgentPerformanceComponent } from './agent-performance/agent-performance.component';
import { ForecastByRepComponent } from './forecast-by-rep/forecast-by-rep.component';
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
	MatTooltipModule
} from '@angular/material';
import { DealsComponent } from './deals/deals.component';

@NgModule({
	imports: [
		CommonModule,
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
		RouterModule.forChild([
			{
				path: '',
				component: TeamBoardComponent
			}
		])
	],
	declarations: [
		TeamBoardComponent,
		TopFivePersonsComponent,
		AgentPerformanceComponent,
		ForecastByRepComponent,
		DealsComponent
	]
})
export class TeamBoardModule {}
