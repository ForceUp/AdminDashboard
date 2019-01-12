import { Component, OnInit, Input } from '@angular/core';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { PageDealModel } from '../dashboard.model';

@Component({
	selector: 'm-deal-stage-funnel',
	templateUrl: './deal-stage-funnel.component.html',
	styleUrls: ['./deal-stage-funnel.component.scss'],
	providers: [NgbProgressbarConfig]
})
export class DealStageFunnelComponent implements OnInit {
	@Input() dealsData: PageDealModel;
	constructor(config: NgbProgressbarConfig) {
		config.max = 100;
		// config.striped = true;
		config.animated = true;
		config.type = 'danger';
		config.height = '37px';
	}

	ngOnInit() {
		debugger;
		console.log(this.dealsData);
		// 				this.dealsData = [
		// 					{
		// 						stage: 'Created',
		// 						count: item.created,
		// 						conversion: item.creatConversion
		// 					},
		// 					{
		// 						stage: 'In Follow-up',
		// 						count: item.followUp,
		// 						conversion: item.fuConversion
		// 					},
		// 					{
		// 						stage: 'Face 2 face ',
		// 						count: item.fac2fac,
		// 						conversion: item.f2fConversion
		// 					},
		// 					{
		// 						stage: 'Doc Collection',
		// 						count: item.docCollection,
		// 						conversion: item.dcConversion
		// 					},
		// 					{
		// 						stage: 'File processing',
		// 						count: item.fileProcessing,
		// 						conversion: item.fpConversion
		// 					},
		// 					{
		// 						stage: 'Closed won',
		// 						count: item.closedWon,
		// 						conversion: item.cwConversion
		// 					},
		// 					{
		// 						stage: 'Closed won',
		// 						count: item.closedLost,
		// 						conversion: item.clConversion
		// 					}
		// 				];
		// 			}
	}
}
