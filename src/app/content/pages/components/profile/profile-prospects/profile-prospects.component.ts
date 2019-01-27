import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CustomerModel, customers } from './data.model';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
	selector: 'm-profile-prospects',
	templateUrl: './profile-prospects.component.html',
	styleUrls: ['./profile-prospects.component.scss']
})
export class ProfileProspectsComponent implements OnInit {
	@Input() sales = [];
	displayedColumns = [
		'select',
		'id',
		'firstName',
		'email',
		'status',
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
	constructor() {
		customers.forEach(element => {
			element.daysOld = new Date();
		});
		this.dataSource = new MatTableDataSource(customers);
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	loadCustomersList(): void {}
	addCustomer(): void {}
	/** UI */
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

	/** SELECTION */
	isAllSelected(): boolean {
		const numSelected = this.selection.selected.length;
		const numRows = customers.length;
		return numSelected === numRows;
	}

	masterToggle() {
		if (this.selection.selected.length === customers.length) {
			this.selection.clear();
		} else {
			customers.forEach(row => this.selection.select(row));
		}
	}

	ngOnInit() {
		this.sales.forEach(element => {
			element.daysOld = new Date();
		});
		// this.dataSource = new MatTableDataSource(customers);
		this.dataSource = new MatTableDataSource(this.sales);
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
}
