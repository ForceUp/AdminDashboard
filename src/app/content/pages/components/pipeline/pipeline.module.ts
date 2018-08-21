import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipelineComponent } from './pipeline.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from '@angular/cdk/layout';
import { PartialsModule } from '../../../partials/partials.module';
import { ListTimelineModule } from '../../../partials/layout/quick-sidebar/list-timeline/list-timeline.module';
import { WidgetChartsModule } from '../../../partials/content/widgets/charts/widget-charts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { MatChipsModule } from '@angular/material';
import { RouterModule } from '@angular/router';

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
		MatChipsModule,
		RouterModule.forChild([
			{
				path: '',
				component: PipelineComponent
			}
		])
	],
	declarations: [PipelineComponent]
})
export class PipelineModule {}
