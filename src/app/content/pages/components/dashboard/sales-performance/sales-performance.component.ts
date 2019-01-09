import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'm-sales-performance',
	templateUrl: './sales-performance.component.html',
	styleUrls: ['./sales-performance.component.scss']
})
export class SalesPerformanceComponent implements OnInit {
	@Input() salesData: Subject<any> = new Subject<any>();
	salesPerformanceData: any[] = [];
	test1 = [];
	test = '';
	constructor( private http: HttpClient) {
	}

	ngOnInit() {

		this.salesPerformanceData = [
			{ name: 'Contacts Assigned', value: 0 },
			{ name: 'Contacts Worked', value: 0 },
			{ name: 'In Follow-up', value: 0 },
			{ name: 'Face 2 face', value: 4 },
			{ name: 'File processing', value: 24 },
			{ name: 'Sales closed', value: 24 },
		];
		console.log(this.salesPerformanceData);
		// this.salesData.subscribe(item => {
		// 	this.onclicka();
		// 	this.test = 'asdf';
		// 	this.test1 = [1, 2, 3];
		// 	if (item) {
		// 		this.salesPerformanceData = [
		// 			{ name: 'Contacts Assigned', value: item.conAssigned },
		// 			{ name: 'Contacts Worked', value: item.conCreated },
		// 			{ name: 'In Follow-up', value: item.conCreated },
		// 			{ name: 'Face 2 face', value: item.fac2fac },
		// 			{ name: 'File processing', value: item.filProcessing },
		// 			{ name: 'Sales closed', value: item.salClosed },
		// 		];
		// 		console.log(this.salesPerformanceData);
		// 	}
		// });
		this.prepareData();
	}
	prepareData() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('https://app.forceupapp.com/users/web/homepage',
			{
				'data': { 'userName': 'katty', 'password': '', 'startDate': 1546496046084, 'endDate': 1546496046084 }
			}).subscribe((data: any) => {
				console.log(data);
				if (data && data.objHomePageSales) {
					const item = data.objHomePageSales;
					this.salesPerformanceData = [
						{ name: 'Contacts Assigned', value: item.conAssigned },
						{ name: 'Contacts Worked', value: item.conCreated },
						{ name: 'In Follow-up', value: item.conCreated },
						{ name: 'Face 2 face', value: item.fac2fac },
						{ name: 'File processing', value: item.filProcessing },
						{ name: 'Sales closed', value: item.salClosed },
					];
				}
			});
	}
}
