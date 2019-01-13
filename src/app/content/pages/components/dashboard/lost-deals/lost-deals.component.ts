import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageLostModel } from '../dashboard.model';

@Component({
	selector: 'm-lost-deals',
	templateUrl: './lost-deals.component.html',
	styleUrls: ['./lost-deals.component.scss']
})
export class LostDealsComponent implements OnInit {
	@Input() lostdealsData: PageLostModel;
	public barChartOptions: any = {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						stepSize: 50,
						max: 250
					}
				}
			]
		}
	};
	public barChartLabels: string[] = [
		'BAD CIBIL',
		'SALARY MISMATCH',
		'GENERAL ENQUIERY',
		'INTEREST MISMATCH',
		'ALREADY BOUGHT',
		'LOAD AMT LESS',
		'HIGH FEES'
	];
	public barChartType: string = 'bar';
	public barChartLegend: boolean = true;

	public barChartData: any[] = [
		{ data: [165, 100, 180, 140, 120, 100, 130], label: '' }
	];

	constructor(private http: HttpClient) { }

	ngOnInit() {
		console.log(this.lostdealsData);
		// const item = this.lostdealsData;
		if (this.lostdealsData) {
			this.barChartData = [{
				data: [this.lostdealsData.badCibil, this.lostdealsData.salMismatch, this.lostdealsData.generalInquiry,
				this.lostdealsData.intMismatch, this.lostdealsData.alreadyBought, this.lostdealsData.lessLoanAmt, this.lostdealsData.highFees]
			}];
		}
	}

	chartHovered(event: any) { }

	chartClicked(event: any) { }
}
