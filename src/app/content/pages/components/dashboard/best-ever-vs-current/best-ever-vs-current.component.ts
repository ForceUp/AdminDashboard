import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'm-best-ever-vs-current',
	templateUrl: './best-ever-vs-current.component.html',
	styleUrls: ['./best-ever-vs-current.component.scss']
})
export class BestEverVsCurrentComponent implements OnInit {
	public lineChartData: Array<any> = [
		{
			data: [65, 59, 80, 81, 56, 55, 40],
			label: 'Best Month',
			fill: false
		},
		{
			data: [150, 120, 100, 99, 100, 77, 90],
			label: 'Current Month',
			fill: false
		}
	];
	public lineChartLabels: Array<any> = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July'
	];
	public lineChartOptions: any = {
		responsive: true
	};
	public lineChartLegend: boolean = true;
	public lineChartType: string = 'line';
	constructor() {}
	ngOnInit() {}

	// events
	public chartClicked(e: any): void {
		console.log(e);
	}

	public chartHovered(e: any): void {
		console.log(e);
	}
}
