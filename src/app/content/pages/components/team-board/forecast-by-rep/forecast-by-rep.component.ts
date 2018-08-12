import { Component, OnInit, ViewChild } from '@angular/core';
import {
	MatTableDataSource,
	MatPaginator,
	MatSort
} from '@angular/material';
import { ForecastData, data } from './data.model';

@Component({
	selector: 'm-forecast-by-rep',
	templateUrl: './forecast-by-rep.component.html',
	styleUrls: ['./forecast-by-rep.component.scss']
})
export class ForecastByRepComponent implements OnInit {
	displayedColumns: string[] = [
		'name',
		'totalClosed',
		'totalPipeLine',
		'totalForecast',
		'actions'
	];
	dataSource: MatTableDataSource<ForecastData>;

	@ViewChild(MatPaginator)
	paginator: MatPaginator;
	@ViewChild(MatSort)
	sort: MatSort;

	constructor() {
		this.dataSource = new MatTableDataSource(data);
	}

	applyFilter(filterValue: string) {
		this.dataSource.filter = filterValue.trim().toLowerCase();

		if (this.dataSource.paginator) {
			this.dataSource.paginator.firstPage();
		}
	}

	ngOnInit() {
		this.dataSource.paginator = this.paginator;
		this.dataSource.sort = this.sort;
	}
}
