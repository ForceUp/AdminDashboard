import {
	Component,
	OnInit,
	Input,
	ChangeDetectionStrategy
} from '@angular/core';
import { SubheaderService } from '../../../core/services/layout/subheader.service';
import * as moment from 'moment';
@Component({
	selector: 'm-subheader',
	templateUrl: './subheader.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubheaderComponent implements OnInit {
	public daterange: any = {
		start: moment(),
		end: moment(),
		label: 'Today'
	};
	t = moment();
	a = moment();
	// see original project for full list of options
	// can also be setup using the config service to apply to multiple pickers
	public options: any = {
		locale: { format: 'YYYY-MM-DD' },
		alwaysShowCalendars: false,
		startDate: this.t,
		endDate: this.a,
		opens: 'left',
		ranges: {
			Today: [moment(), moment()],
			Yesterday: [
				moment().subtract(1, 'days'),
				moment().subtract(1, 'days')
			],
			'Last 7 Days': [moment().subtract(6, 'days'), moment()],
			'Last 30 Days': [moment().subtract(29, 'days'), moment()],
			'This Month': [moment().startOf('month'), moment().endOf('month')],
			'Last Month': [
				moment()
					.subtract(1, 'month')
					.startOf('month'),
				moment()
					.subtract(1, 'month')
					.endOf('month')
			]
		}
	};
	constructor(public subheaderService: SubheaderService) {}

	ngOnInit(): void {}

	selectedDate(value: any, datepicker?: any) {
		// this is the date the iser selected
		console.log(value);

		// any object can be passed to the selected event and it will be passed back here
		datepicker.start = value.start;
		datepicker.end = value.end;

		// or manupulat your own internal property
		this.daterange.start = value.start;
		this.daterange.end = value.end;
		this.daterange.label = value.label;
	}
}
