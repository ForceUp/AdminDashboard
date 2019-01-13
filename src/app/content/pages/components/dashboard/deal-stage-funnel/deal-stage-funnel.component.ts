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
	@Input() dealsDataInput: PageDealModel;
	dealsData: any[];
	constructor(config: NgbProgressbarConfig, private http: HttpClient) {
		config.max = 100;
		// config.striped = true;
		config.animated = true;
		config.type = 'danger';
		config.height = '37px';
	}

	ngOnInit() {
		this.dealsData = [
			{
				stage: 'Created',
				count: this.dealsDataInput.created,
				conversion: this.dealsDataInput.creatConversion
			},
			{
				stage: 'In Follow-up',
				count: this.dealsDataInput.followUp,
				conversion: this.dealsDataInput.fuConversion
			},
			{
				stage: 'Face 2 face ',
				count: this.dealsDataInput.fac2fac,
				conversion: this.dealsDataInput.f2fConversion
			},
			{
				stage: 'Doc Collection',
				count: this.dealsDataInput.docCollection,
				conversion: this.dealsDataInput.dcConversion
			},
			{
				stage: 'File processing',
				count: this.dealsDataInput.fileProcessing,
				conversion: this.dealsDataInput.fpConversion
			},
			{
				stage: 'Closed won',
				count: this.dealsDataInput.closedWon,
				conversion: this.dealsDataInput.cwConversion
			},
			{
				stage: 'Closed won',
				count: this.dealsDataInput.closedLost,
				conversion: this.dealsDataInput.clConversion
			}
		];
	}

}
