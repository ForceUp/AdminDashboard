import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';

@Component({
	selector: 'm-team-board',
	templateUrl: './team-board.component.html',
	styleUrls: ['./team-board.component.scss']
})
export class TeamBoardComponent implements OnInit {
	constructor(private subheaderService: SubheaderService) {}

	ngOnInit() {
		this.subheaderService.title$.next('Team');
	}
}
