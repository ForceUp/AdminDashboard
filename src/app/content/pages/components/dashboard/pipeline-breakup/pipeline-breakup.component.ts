import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { PagePipeLineModel } from '../dashboard.model';

@Component({
	selector: 'm-pipeline-breakup',
	templateUrl: './pipeline-breakup.component.html',
	styleUrls: ['./pipeline-breakup.component.scss'],
	providers: [NgbProgressbarConfig]
})
export class PipelineBreakupComponent implements OnInit {
	@Input() breakupData: PagePipeLineModel;
	pipeLineData: any[];
	constructor(config: NgbProgressbarConfig, private http: HttpClient) {
		config.max = 100;
		// config.striped = true;
		config.animated = true;
		// config.type = 'success';
		config.height = '87px';
	}

	ngOnInit() {
		if (this.breakupData) {
			this.pipeLineData = [
				{
					amount: this.breakupData.fuValue,
					stage: 'Follow up ',
					percent: this.breakupData.fuPercent,
					type: 'danger',
					flexWidth: { flex: `0 1 20%` }
				},
				{
					amount: this.breakupData.conValue,
					stage: 'Contacted ',
					percent: this.breakupData.conPercent,
					type: 'warning',
					flexWidth: { flex: `0 1 20%` }
				},
				{
					amount: this.breakupData.f2fValue,
					stage: 'F2F ',
					percent: this.breakupData.f2fPercent,
					type: 'high deal',
					flexWidth: { flex: `0 1 40%` }
				},
				{
					amount: this.breakupData.dcValue,
					stage: 'Doc Collection ',
					percent: this.breakupData.dcPercent,
					type: 'info',
					flexWidth: { flex: `0 1 10%` }
				},
				{
					amount: this.breakupData.fpValue,
					stage: 'File Processing ',
					percent: this.breakupData.fpPercent,
					type: 'success',
					flexWidth: { flex: `0 1 10%` }
				}
			];
		}
		// this.prepareData();
	}
}
