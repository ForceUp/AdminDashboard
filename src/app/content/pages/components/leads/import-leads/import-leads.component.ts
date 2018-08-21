import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GoogleApiService } from 'ng-gapi/lib/GoogleApiService';
import { GoogleAuthService } from 'ng-gapi/lib/GoogleAuthService';
import { GmailUserService } from '../gmail-user.service';

@Component({
	selector: 'm-import-leads',
	templateUrl: './import-leads.component.html',
	styleUrls: ['./import-leads.component.scss']
})
export class ImportLeadsComponent implements OnInit {
	constructor(
		private router: Router,
		private gapiService: GoogleApiService,
		private googleUserService: GmailUserService
	) {
		this.gapiService.onLoad().subscribe();
	}

	ngOnInit() {}

	importCSV(): void {}
	importGmail(): void {
		this.googleUserService.signIn().subscribe((auth: any) => {
			// debugger;
			this.router.navigate(['leads/import-gmail-contacts']);
		});
	}
}
