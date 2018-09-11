import { Component, OnInit, ViewChild } from '@angular/core';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';
import {
	MatTableDataSource,
	MatPaginator,
	MatSort,
	MatSidenav
} from '@angular/material';

import { SelectionModel } from '@angular/cdk/collections';
import { DealsModel, deals } from './deals.model';

@Component({
	selector: 'm-deals',
	templateUrl: './deals.component.html',
	styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
	model: any;
	sidenavOpened: boolean;
	@ViewChild('sidenav')
	sidenav: MatSidenav;
	displayedColumns = [
		'select',
		'name',
		'stage',
		'closeDate',
		'owner',
		'amount'
	];
	dataSource: MatTableDataSource<DealsModel>;
	filterStatus: string = '';
	filterType: string = '';
	@ViewChild(MatPaginator)
	paginator: MatPaginator;
	@ViewChild(MatSort)
	sort: MatSort;
	selection = new SelectionModel<DealsModel>(true, []);
	constructor(public subheaderService: SubheaderService) {
		this.dataSource = new MatTableDataSource(deals);
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}
	loadCustomersList(): void {}
	addDeal(): void {}
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
		const numRows = deals.length;
		return numSelected === numRows;
	}

	masterToggle() {
		if (this.selection.selected.length === deals.length) {
			this.selection.clear();
		} else {
			deals.forEach(row => this.selection.select(row));
		}
	}

	close() {
		this.sidenav.close();
	}

	ngOnInit() {
		this.subheaderService.title$.next('Deals');
		this.model = {
			table: true,
			board: false
		};
	}
}
