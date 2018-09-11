import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { CustomerModel, customers } from '../profile/profile-prospects/data.model';
import { SelectionModel } from '@angular/cdk/collections';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateRepModalComponent } from '../user-onboarding/create-rep-modal/create-rep-modal.component';

@Component({
  selector: 'm-productivity',
  templateUrl: './productivity.component.html',
  styleUrls: ['./productivity.component.scss']
})
export class ProductivityComponent implements OnInit {

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
	constructor(private modalService: NgbModal) {
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
	addRep(): void {
		const modalRef = this.modalService.open(CreateRepModalComponent);

		modalRef.result.then(result => {
			// debugger;
		}, (reason) => {
			// debugger;
		  });
	}
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
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
}
