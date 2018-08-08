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
import { SalesPerformanceComponent } from './sales-performance/sales-performance.component';
import { DealStageFunnelComponent } from './deal-stage-funnel/deal-stage-funnel.component';

@NgModule({
	imports: [
		CommonModule,
		LayoutModule,
		PartialsModule,
		ListTimelineModule,
		WidgetChartsModule,
		NgbModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardComponent
			}
		])
	],
	providers: [],
	declarations: [DashboardComponent, PipelineBreakupComponent, SalesPerformanceComponent, DealStageFunnelComponent]
})
export class DashboardModule {}
