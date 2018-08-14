import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'm-profile-sales-performance',
	templateUrl: './profile-sales-performance.component.html',
	styleUrls: ['./profile-sales-performance.component.scss']
})
export class ProfileSalesPerformanceComponent implements OnInit {
	salesPerformanceData: any[];
	constructor() {
		this.salesPerformanceData = [
			{ name: 'Contacts Assigned', value: 24 },
			{ name: 'Contacts Worked', value: 2 },
			{ name: 'In Follow-up', value: 0 },
			{ name: 'Face 2 face', value: 4 },
			{ name: 'File processing', value: 24 },
			{ name: 'Sales closed', value: 24 }
		];
	}

	ngOnInit() {}
}
