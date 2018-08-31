import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService } from 'ng-gapi/lib/GoogleApiService';
import { GmailUserService } from '../gmail-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ImportLeadModalComponent } from './import-lead-modal/import-lead-modal.component';

@Component({
	selector: 'm-import-leads',
	templateUrl: './import-leads.component.html',
	styleUrls: ['./import-leads.component.scss']
})
export class ImportLeadsComponent implements OnInit {
	constructor(
		private router: Router,
		private gapiService: GoogleApiService,
		private googleUserService: GmailUserService,
		private modalService: NgbModal
	) {
		this.gapiService.onLoad().subscribe();
	}

	ngOnInit() {}

	uploadLeadManually(): void {
		const modalRef = this.modalService.open(ImportLeadModalComponent);

		modalRef.result.then(result => {
			debugger;
			this.router.navigate(['leads/import-gmail-contacts']);
		}, (reason) => {
			debugger;
		  });
	}

	importCSV(): void {}
	importGmail(): void {
		this.googleUserService.signIn().subscribe((auth: any) => {
			// debugger;
			this.router.navigate(['leads/import-gmail-contacts']);
		});
	}
}
