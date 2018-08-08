import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'm-pipeline-breakup',
	templateUrl: './pipeline-breakup.component.html',
	styleUrls: ['./pipeline-breakup.component.scss'],
	providers: [NgbProgressbarConfig]
})
export class PipelineBreakupComponent implements OnInit {
	pipeLineData: any[];
	constructor(config: NgbProgressbarConfig) {
		config.max = 100;
		// config.striped = true;
		config.animated = true;
		// config.type = 'success';
		config.height = '87px';
	}

	ngOnInit() {
		this.pipeLineData = [
			{
				amount: 234455,
				stage: 'Follow up ',
				percent: 35,
				type: 'danger'
			},
			{
				amount: 23855,
				stage: 'Contacted ',
				percent: 23,
				type: 'warning'
			},
			{ amount: 234525, stage: 'F2F ', percent: 55, type: 'high deal' },
			{
				amount: 23785,
				stage: 'Doc Collection ',
				percent: 27,
				type: 'info'
			},
			{
				amount: 15255,
				stage: 'File Processing ',
				percent: 88,
				type: 'success'
			}
		];
	}
}
