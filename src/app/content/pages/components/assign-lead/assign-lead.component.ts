import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';


@Component({
	selector: 'm-assign-lead',
	templateUrl: './assign-lead.component.html',
	styleUrls: ['./assign-lead.component.scss']
})
export class AssignLeadComponent implements OnInit {
	lat: number = 20.5937;
	lng: number = 78.9629;
	markers: any[];
	polylines: any[];
	polyline: any[];
	maxSpeed: number;
	constructor(private subheaderService: SubheaderService) {

	}

	private rebuildPolylines() {
		const polylines = [];
		let i = 0;
		let newPolyline = { path: [], color: 'blue' };
		for (const point of this.polyline) {
			console.log(point);
			newPolyline.path.push(point);
			const speedChanged =
				(this.polyline[i + 1] &&
					(point.speed < this.maxSpeed &&
						this.polyline[i + 1].speed < this.maxSpeed)) ||
				(point.speed > this.maxSpeed &&
					this.polyline[i + 1].speed > this.maxSpeed);
			if (point.speed > this.maxSpeed) {
				newPolyline.color = 'red';
			}
			if (speedChanged) {
				newPolyline.path.push(this.polyline[i + 1]);
				polylines.push(newPolyline);
				newPolyline = { path: [], color: 'blue' };
			}
			i++;
		}
		console.log(polylines);
		return polylines;
	}

	ngOnInit() {
		this.subheaderService.title$.next('Assign Lead');
		this.maxSpeed = 40;
		this.markers = [
			{
				lat: 20.768854722,
				lng: 78.41235465454,
				name: 'Force Up Leads'
			},
			{
				lat: 20.451241222,
				lng: 78.89797464454,
				name: 'Force Up Leads'
			},
			{
				lat: 20.143341222,
				lng: 78.3021545454,
				name: 'Force Up Leads'
			},
			{
				lat: 20.35451222,
				lng: 78.461502445454,
				name: 'Force Up Leads'
			}
		];

		this.polyline = [
			{
				latitude: 20.8282,
				longitude: 78.5795,
				speed: 50
			},
			{
				latitude: 20.8282,
				longitude: 78.5795,
				speed: 50
			},
			{
				latitude: 20.772,
				longitude: 78.214,
				speed: 20
			},
			{
				latitude: 20.291,
				longitude: 78.821,
				speed: 20
			},
			{
				latitude: 20.142,
				longitude: 78.431,
				speed: 20
			},
			{
				latitude: 20.467,
				longitude: 78.027,
				speed: 25
			}
		];
		this.polylines = this.rebuildPolylines();
	}
}
