import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { PageSalesModel } from '../dashboard.model';

@Component({
	selector: 'm-sales-performance',
	templateUrl: './sales-performance.component.html',
	styleUrls: ['./sales-performance.component.scss']
})
export class SalesPerformanceComponent implements OnInit {
	@Input() saleData: PageSalesModel;

	constructor() {}

	ngOnInit() {
		// 	this.salesPerformanceData = [
		// 	{ name: 'Contacts Assigned', value: item.conAssigned },
		// 	{ name: 'Contacts Worked', value: item.conCreated },
		// 	{ name: 'In Follow-up', value: item.conCreated },
		// 	{ name: 'Face 2 face', value: item.fac2fac },
		// 	{ name: 'File processing', value: item.filProcessing },
		// 	{ name: 'Sales closed', value: item.salClosed },
		// ];
	}
}
