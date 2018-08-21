import { Component, OnInit } from '@angular/core';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';

@Component({
  selector: 'm-pipeline',
  templateUrl: './pipeline.component.html',
  styleUrls: ['./pipeline.component.scss']
})
export class PipelineComponent implements OnInit {
	constructor(public subheaderService: SubheaderService) {}

	ngOnInit() {
		this.subheaderService.title$.next('Pipeline');
	}

}
