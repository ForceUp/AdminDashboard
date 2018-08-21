import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { LeadsModel, leads } from './leads-list.model';

@Component({
	selector: 'm-leads-table',
	templateUrl: './leads-table.component.html',
	styleUrls: ['./leads-table.component.scss']
})
export class LeadsTableComponent implements OnInit {
	displayedColumns = [
		'select',
		'firstName',
		'percent',
		'value',
		'kms'
	];
	dataSource: MatTableDataSource<LeadsModel>;
	filterStatus: string = '';
	filterType: string = '';
	@ViewChild(MatPaginator)
	paginator: MatPaginator;
	@ViewChild(MatSort)
	sort: MatSort;
	selection = new SelectionModel<LeadsModel>(true, []);
	constructor() {
		this.dataSource = new MatTableDataSource(leads);
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
		const numRows = leads.length;
		return numSelected === numRows;
	}

	masterToggle() {
		if (this.selection.selected.length === leads.length) {
			this.selection.clear();
		} else {
			leads.forEach(row => this.selection.select(row));
		}
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
}
