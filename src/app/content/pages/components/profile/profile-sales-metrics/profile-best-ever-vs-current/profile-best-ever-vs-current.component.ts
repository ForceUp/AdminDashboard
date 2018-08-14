import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'm-profile-best-ever-vs-current',
  templateUrl: './profile-best-ever-vs-current.component.html',
  styleUrls: ['./profile-best-ever-vs-current.component.scss']
})
export class ProfileBestEverVsCurrentComponent implements OnInit {
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
		'Day 1 ',
		'Day 5',
		'Day 10',
		'Day 15',
		'Day 20',
		'Day 25',
		'Day 30'
	];
	public lineChartOptions: any = {
		responsive: true,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
						stepSize: 25,
						max: 1000,
						callback: (value, index, values) => {
							return value + ' k';
						}
					}
				}
			]
		}
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
