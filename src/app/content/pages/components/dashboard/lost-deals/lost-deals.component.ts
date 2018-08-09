import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'm-lost-deals',
	templateUrl: './lost-deals.component.html',
	styleUrls: ['./lost-deals.component.scss']
})
export class LostDealsComponent implements OnInit {
	public barChartOptions: any = {
		scaleShowVerticalLines: false,
		responsive: true
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
		{ data: [65, 59, 80, 81, 56, 55, 40], label: '' }
	];
	availableColors: any[] = [
		{ name: 'BAD CIBIL', color: 'm--bg-fill-primary' },
		{ name: 'SALARY MISMATCH', color: 'm--bg-fill-warning' },
		{ name: 'GENERAL ENQUIERY', color: 'm--bg-fill-accent' },
		{ name: 'ALREADY BOUGHT', color: 'm--bg-fill-warn' },
		{ name: 'LOAD AMT LESS', color: 'm--bg-danger' },
		{ name: 'HIGH FEES', color: 'm--bg-info' },
		{ name: 'INTEREST MISMATCH', color: 'm--bg-fill-metal' }
	];
	constructor() {}

	ngOnInit() {}

	chartHovered(event: any) {}

	chartClicked(event: any) {}
}
