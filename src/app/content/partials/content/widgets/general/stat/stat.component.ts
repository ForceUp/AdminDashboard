import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StatusModel, PageTargetModel } from '../../../../../pages/components/dashboard/dashboard.model';

@Component({
	selector: 'm-stat',
	templateUrl: './stat.component.html',
	styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {

	@Input() statsData: PageTargetModel;
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
		this.targetAchieved = this.statsData.targetAchieved;
		this.daysRemaining = this.statsData.daysRemaining;
		this.percentageRemaining = this.statsData.percentageRemaining;
		this.prospectsCreated = this.statsData.prospectsCreated;
		this.prospectsAssigned = this.statsData.prospectsAssigned;
		this.prospectsReached = this.statsData.prospectsReached;
		this.fileProcessing = this.statsData.fileProcessing;
		this.followup = this.statsData.followup;
		this.lostValues = this.statsData.lostValues;
	}
}
