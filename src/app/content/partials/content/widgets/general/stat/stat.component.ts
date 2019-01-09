import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
	selector: 'm-stat',
	templateUrl: './stat.component.html',
	styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

	targetAchieved: any;
	daysRemaining: any;
	percentageRemaining: any;
	prospectsCreated: any;
	prospectsAssigned: any;
	prospectsReached: any;
	fileProcessing: any;
	followup: any;
	lostValues: any;
	constructor(private http: HttpClient) { }

	ngOnInit() {
	}

	prepareData() {
		const headers = new Headers();
		headers.append('Content-Type', 'application/json');
		this.http.post('https://app.forceupapp.com/users/web/homepage',
			{
				'data': { 'userName': 'katty', 'password': '', 'startDate': 1546496046084, 'endDate': 1546496046084 }
			}).subscribe((data: any) => {
				console.log(data);
				if (data && data.objHomePageTarget) {
					const item = data.objHomePageTarget;
					this.targetAchieved = item.targetAchieved;
					this.daysRemaining = item.daysRemaining;
					this.percentageRemaining = item.percentageRemaining;
					this.prospectsCreated = item.prospectsCreated;
					this.prospectsAssigned = item.prospectsAssigned;
					this.prospectsReached = item.prospectsReached;
					this.fileProcessing = item.fileProcessing;
					this.followup = item.followup;
					this.lostValues = item.lostValues;
				}
			});
	}
}
