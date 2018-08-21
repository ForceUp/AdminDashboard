import {
	Directive,
	Input,
	AfterViewInit,
	ElementRef,
	OnInit
} from '@angular/core';

declare var $: any;
@Directive({
	selector: '[fullCalendar]',
	exportAs: 'fullCalendar'
})
export class FullCalendarDirective implements OnInit, AfterViewInit {
	@Input()
	config: object = {};
	defaultConfig: object = {
		header: {
			left: 'prev,next today',
			center: 'title',
			right: 'month,basicWeek,basicDay'
		},
		editable: true,
		eventLimit: true, // allow "more" link when too many events
		navLinks: true
	};
	constructor(private el: ElementRef) {}

	ngOnInit(): void {
		// debugger;
		Object.assign(this.defaultConfig, this.config);
		setTimeout(() => {
			$(this.el.nativeElement).fullCalendar(this.defaultConfig);
		}, 10);
	}

	ngAfterViewInit() {
		setTimeout(() => {
			$(this.el.nativeElement).fullCalendar('refetchEvents');
		}, 1000);
	}
}
