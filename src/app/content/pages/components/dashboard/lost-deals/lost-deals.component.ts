import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'm-lost-deals',
	templateUrl: './lost-deals.component.html',
	styleUrls: ['./lost-deals.component.scss']
})
export class LostDealsComponent implements OnInit {
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

	constructor(private http: HttpClient) {}

	ngOnInit() {
		this.prepareData();
	}

	chartHovered(event: any) {}

	chartClicked(event: any) { }
	prepareData() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('https://app.forceupapp.com/users/web/homepage',
			{
				'data': { 'userName': 'katty', 'password': '', 'startDate': 1546496046084, 'endDate': 1546496046084 }
			}).subscribe((data: any) => {
				console.log(data);
				if (data && data.objHomePageLost) {
					const item = data.objHomePageLost;
					this.barChartData = [item.badCibil, item.salMismatch, item.generalInquiry,
					item.intMismatch, item.alreadyBought, item.lessLoanAmt, item.highFees];
				}
			});
	}
}
