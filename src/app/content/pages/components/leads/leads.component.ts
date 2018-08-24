import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';

@Component({
	selector: 'm-leads',
	templateUrl: './leads.component.html',
	styleUrls: ['./leads.component.scss']
})
export class LeadsComponent implements OnInit {
	constructor(private subheaderService: SubheaderService) {}

	ngOnInit() {
		this.subheaderService.title$.next('Import');
	}
}
