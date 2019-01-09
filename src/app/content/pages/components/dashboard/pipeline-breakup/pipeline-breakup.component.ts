import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'm-pipeline-breakup',
	templateUrl: './pipeline-breakup.component.html',
	styleUrls: ['./pipeline-breakup.component.scss'],
	providers: [NgbProgressbarConfig]
})
export class PipelineBreakupComponent implements OnInit {
	pipeLineData: any[];
	constructor(config: NgbProgressbarConfig, private http: HttpClient) {
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
				flexWidth: { flex: `0 1 20%` }
			},
			{
				amount: 23855,
				stage: 'Contacted ',
				percent: 20,
				type: 'warning',
				flexWidth: { flex: `0 1 20%` }
			},
			{
				amount: 234525,
				stage: 'F2F ',
				percent: 40,
				type: 'high deal',
				flexWidth: { flex: `0 1 40%` }
			},
			{
				amount: 23785,
				stage: 'Doc Collection ',
				percent: 10,
				type: 'info',
				flexWidth: { flex: `0 1 10%` }
			},
			{
				amount: 15255,
				stage: 'File Processing ',
				percent: 10,
				type: 'success',
				flexWidth: { flex: `0 1 10%` }
			}
		];
		this.prepareData();
	}

	prepareData() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('https://app.forceupapp.com/users/web/homepage',
			{
				'data': { 'userName': 'katty', 'password': '', 'startDate': 1546496046084, 'endDate': 1546496046084 }
			}).subscribe((data: any) => {
				console.log(data);
				if (data && data.objHomePagePipeline) {
					const item = data.objHomePagePipeline;
					this.pipeLineData = [
						{
							amount: item.fuValue,
							stage: 'Follow up ',
							percent: item.fuPercent,
							type: 'danger',
							flexWidth: { flex: `0 1 20%` }
						},
						{
							amount: item.conValue,
							stage: 'Contacted ',
							percent: item.conPercent,
							type: 'warning',
							flexWidth: { flex: `0 1 20%` }
						},
						{
							amount: item.f2fValue,
							stage: 'F2F ',
							percent: item.f2fPercent,
							type: 'high deal',
							flexWidth: { flex: `0 1 40%` }
						},
						{
							amount: item.dcValue,
							stage: 'Doc Collection ',
							percent: item.dcPercent,
							type: 'info',
							flexWidth: { flex: `0 1 10%` }
						},
						{
							amount: item.fpValue,
							stage: 'File Processing ',
							percent: item.fpPercent,
							type: 'success',
							flexWidth: { flex: `0 1 10%` }
						}
					];
				}
			});
	}
}
