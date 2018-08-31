import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PartialsModule } from '../partials/partials.module';
import { ActionComponent } from './header/action/action.component';
import { CoreModule } from '../../core/core.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { TeamBoardModule } from './components/team-board/team-board.module';
import { ProfileModule } from './components/profile/profile.module';
import { LeadsModule } from './components/leads/leads.module';
import { PipelineModule } from './components/pipeline/pipeline.module';
import { AgentPerformanceComponent } from './components/agent-performance/agent-performance.component';
import { ListTimelineModule } from '../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../partials/content/widgets/charts/widget-charts.module';
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
	MatTooltipModule
} from '@angular/material';

@NgModule({
	declarations: [
		PagesComponent,
		ActionComponent,
		ErrorPageComponent,
		AgentPerformanceComponent
	],
	imports: [
		CommonModule,
		HttpClientModule,
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
		FormsModule,
		PagesRoutingModule,
		CoreModule,
		LayoutModule,
		PartialsModule,
		AngularEditorModule,
		TeamBoardModule,
		ProfileModule,
		LeadsModule,
		PipelineModule
	],
	providers: [],
	exports: []
})
export class PagesModule {}
