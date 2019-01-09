import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'm-deal-stage-funnel',
	templateUrl: './deal-stage-funnel.component.html',
	styleUrls: ['./deal-stage-funnel.component.scss'],
	providers: [NgbProgressbarConfig]
})
export class DealStageFunnelComponent implements OnInit {
	dealsData: any[];
	constructor(config: NgbProgressbarConfig, private http: HttpClient) {
		config.max = 100;
		// config.striped = true;
		config.animated = true;
		config.type = 'danger';
		config.height = '37px';
		this.dealsData = [
			{
				stage: 'Created',
				count: 29,
				conversion: 95.55
			},
			{
				stage: 'In Follow-up',
				count: 28,
				conversion: 21.55
			},
			{
				stage: 'Face 2 face ',
				count: 6,
				conversion: 50
			},
			{
				stage: 'Doc Collection',
				count: 3,
				conversion: 33.33
			},
			{
				stage: 'File processing',
				count: 1,
				conversion: 100
			},
			{
				stage: 'Closed won',
				count: 1,
				conversion: 100
			}
		];
	}

	ngOnInit() { this.prepareData(); }

	prepareData() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('https://app.forceupapp.com/users/web/homepage',
			{
				'data': { 'userName': 'katty', 'password': '', 'startDate': 1546496046084, 'endDate': 1546496046084 }
			}).subscribe((data: any) => {
				console.log(data);
				if (data && data.objHomePageDeal) {
					const item = data.objHomePageDeal;
					this.dealsData = [
						{
							stage: 'Created',
							count: item.created,
							conversion: item.creatConversion
						},
						{
							stage: 'In Follow-up',
							count: item.followUp,
							conversion: item.fuConversion
						},
						{
							stage: 'Face 2 face ',
							count: item.fac2fac,
							conversion: item.f2fConversion
						},
						{
							stage: 'Doc Collection',
							count: item.docCollection,
							conversion: item.dcConversion
						},
						{
							stage: 'File processing',
							count: item.fileProcessing,
							conversion: item.fpConversion
						},
						{
							stage: 'Closed won',
							count: item.closedWon,
							conversion: item.cwConversion
						},
						{
							stage: 'Closed won',
							count: item.closedLost,
							conversion: item.clConversion
						}
					];
				}
			});
	}
}
