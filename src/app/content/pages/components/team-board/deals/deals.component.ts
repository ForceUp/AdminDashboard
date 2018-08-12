import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
	public barChartOptions1: any = {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						stepSize: 10,
						max: 100
					}
				}
			]
		}
	};
	public barChartOptions2: any = {
		maintainAspectRatio: false,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						stepSize: 10,
						max: 100,
						callback: (value, index, values) => {
							return value + ' %';
						}
					}
				}
			]
		}
	};
	public barChartLabels: string[] = [
		'Dinesh',
		'Mohan',
		'George',
		'Abdallah',
		'Mark',
		'Brad',
		'Siela'
	];
	public barChartType: string = 'bar';
	public barChartLegend: boolean = true;

	public barChartData1: any[] = [
		{ data: [40, 20, 45, 70, 10, 60, 31], label: 'Most Sales Lost' }
	];
	public barChartData2: any[] = [
		{ data: [65, 90, 80, 40, 20, 10, 30], label: 'Most Lead Conversion %' }
	];

	constructor() {}

	ngOnInit() {}

	chartHovered(event: any) {}

	chartClicked(event: any) {}
}
