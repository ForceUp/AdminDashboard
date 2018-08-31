import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';

@Component({
	selector: 'm-agent-performance',
	templateUrl: './agent-performance.component.html',
	styleUrls: ['./agent-performance.component.scss']
})
export class AgentPerformanceComponent implements OnInit {
	constructor(private subheaderService: SubheaderService) {}

	ngOnInit() {
		this.subheaderService.title$.next('Agent Performance');
	}
}
