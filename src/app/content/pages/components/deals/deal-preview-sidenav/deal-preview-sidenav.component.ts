import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'm-deal-preview-sidenav',
	templateUrl: './deal-preview-sidenav.component.html',
	styleUrls: ['./deal-preview-sidenav.component.scss']
})
export class DealPreviewSidenavComponent implements OnInit {
	@Output()
	close: EventEmitter<any> = new EventEmitter<any>();
	constructor() {}

	ngOnInit() {}
}
