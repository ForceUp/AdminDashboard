import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'm-profile-pipeline-breakup',
	templateUrl: './profile-pipeline-breakup.component.html',
	styleUrls: ['./profile-pipeline-breakup.component.scss']
})
export class ProfilePipelineBreakupComponent implements OnInit {
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
				percent: 20,
				type: 'danger',
				flexWidth: { flex: `0 0 20%` }
			},
			{
				amount: 23855,
				stage: 'Contacted ',
				percent: 20,
				type: 'warning',
				flexWidth: { flex: `0 0 20%` }
			},
			{
				amount: 234525,
				stage: 'F2F ',
				percent: 40,
				type: 'high deal',
				flexWidth: { flex: `0 0 40%` }
			},
			{
				amount: 23785,
				stage: 'Doc Collection ',
				percent: 10,
				type: 'info',
				flexWidth: { flex: `0 0 10%` }
			},
			{
				amount: 15255,
				stage: 'File Processing ',
				percent: 10,
				type: 'success',
				flexWidth: { flex: `0 0 10%` }
			}
		];
	}
}
