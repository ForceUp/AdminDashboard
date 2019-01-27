import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';
import { HttpClient } from '@angular/common/http';
import { PipelineService } from './pipeline.service';
import { Observable } from 'rxjs';

@Component({
	selector: 'm-pipeline',
	templateUrl: './pipeline.component.html',
	styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {
	constructor(public subheaderService: SubheaderService, private _pipelineService: PipelineService,
		private http: HttpClient) { }

	pipelineData$: Observable<any>;
	ngOnInit() {
		this.subheaderService.title$.next('Pipeline');
		this.pipelineData$ = this._pipelineService
			.getPipelineData();
	}
}
