import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-profile-lost-deals',
  templateUrl: './profile-lost-deals.component.html',
  styleUrls: ['./profile-lost-deals.component.scss']
})
export class ProfileLostDealsComponent implements OnInit {
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

	constructor() {}

	ngOnInit() {}

	chartHovered(event: any) {}

	chartClicked(event: any) {}

}
