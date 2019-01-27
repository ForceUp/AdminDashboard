import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { GmailUserService } from '../gmail-user.service';
import { SubheaderService } from '../../../../../core/services/layout/subheader.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { CustomerModel } from '../../profile/profile-prospects/data.model';

@Component({
	selector: 'm-import-gmail-contacts',
	templateUrl: './import-gmail-contacts.component.html',
	styleUrls: ['./import-gmail-contacts.component.scss']
})
export class ImportGmailContactsComponent implements OnInit, AfterViewInit {
	contacts: CustomerModel[];
	displayedColumns = [
		'select',
		'id',
		'firstName',
		'email',
		'status',
		'type',
		'daysOld'
	];
	dataSource: MatTableDataSource<CustomerModel>;
	filterStatus: string = '';
	filterType: string = '';
	@ViewChild(MatPaginator)
	paginator: MatPaginator;
	@ViewChild(MatSort)
	sort: MatSort;
	selection = new SelectionModel<CustomerModel>(true, []);

	constructor(
		private googleUserService: GmailUserService,
		public subheaderService: SubheaderService
	) {
		this.subheaderService.title$.next('Google Contacts');
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	/** SELECTION */
	isAllSelected(): boolean {
		const numSelected = this.selection.selected.length;
		const numRows = this.contacts.length;
		return numSelected === numRows;
	}

	masterToggle() {
		if (this.selection.selected.length === this.contacts.length) {
			this.selection.clear();
		} else {
			this.contacts.forEach(row => this.selection.select(row));
		}
	}

	getItemCssClassByStatus(status: number = 0): string {
		switch (status) {
			case 0:
				return 'metal';
			case 1:
				return 'success';
			case 2:
				return 'danger';
		}
		return '';
	}

	getItemStatusString(status: number = 0): string {
		switch (status) {
			case 0:
				return 'Suspended';
			case 1:
				return 'Active';
			case 2:
				return 'Pending';
		}
		return '';
	}

	getItemCssClassByType(status: number = 0): string {
		switch (status) {
			case 0:
				return 'accent';
			case 1:
				return 'primary';
			case 2:
				return '';
		}
		return '';
	}

	getItemTypeString(status: number = 0): string {
		switch (status) {
			case 0:
				return 'Business';
			case 1:
				return 'Individual';
		}
		return '';
	}

	loadCustomersList(): void { }

	ngOnInit() {
		this.contacts = [];
		this.googleUserService.getUserContacts().subscribe((results: any) => {
			debugger;
			if (results && results.length) {
				results.forEach((element, index) => {
					this.contacts.push({
						id: index + 1,
						userName: element.leadName ? element.leadName : '',
						photo: element.photos ? element.photos[0].url : '',
						job: element.occupations
							? element.occupations[0].value
							: '',
						email: element.leadMailId
							? element.leadMailId
							: '',
						dateOfBbirth: element.birthdays
							? element.birthdays[0].text
							: '',
						ipAddress: '251.237.126.210',
						status: element.leadStatus,
						type: 1,
						_userId: 1,
						_createdDate: '09/07/2016',
						_updatedDate: '05/31/2013'
					});
				});
				this.dataSource = new MatTableDataSource(this.contacts);
				this.dataSource.paginator = this.paginator;
				this.dataSource.sort = this.sort;
			}
		});
	}

	ngAfterViewInit() { }
}
