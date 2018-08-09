import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../../../layout/layout.module';
import { PartialsModule } from '../../../partials/partials.module';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { PipelineBreakupComponent } from './pipeline-breakup/pipeline-breakup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { SalesPerformanceComponent } from './sales-performance/sales-performance.component';
import { DealStageFunnelComponent } from './deal-stage-funnel/deal-stage-funnel.component';
import { BestEverVsCurrentComponent } from './best-ever-vs-current/best-ever-vs-current.component';
import { LostDealsComponent } from './lost-deals/lost-deals.component';
import {MatChipsModule} from '@angular/material/chips';
@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		ListTimelineModule,
		WidgetChartsModule,
		NgbModule,
		ChartsModule,
		MatChipsModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			}
		])
	],
	providers: [],
	declarations: [
		DashboardComponent,
		PipelineBreakupComponent,
		SalesPerformanceComponent,
		DealStageFunnelComponent,
		BestEverVsCurrentComponent,
		LostDealsComponent
	]
})
export class DashboardModule {}
