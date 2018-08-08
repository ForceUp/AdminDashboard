import { Component, OnInit } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'm-deal-stage-funnel',
	templateUrl: './deal-stage-funnel.component.html',
	styleUrls: ['./deal-stage-funnel.component.scss'],
	providers: [NgbProgressbarConfig]
})
export class DealStageFunnelComponent implements OnInit {
	dealsData: any[];
	constructor(config: NgbProgressbarConfig) {
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

	ngOnInit() {}
}
