import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import { startWith } from 'rxjs/internal/operators/startWith';
import { map } from 'rxjs/internal/operators/map';

@Component({
	selector: 'm-import-lead-modal',
	templateUrl: './import-lead-modal.component.html',
	styleUrls: ['./import-lead-modal.component.scss']
})
export class ImportLeadModalComponent implements OnInit {
	stateCtrl: FormControl;
	filteredStates: Observable<any[]>;
	states: any[];
	constructor(public activeModal: NgbActiveModal) {
		this.states = [
			{
				name: 'Arkansas',
				population: '2.978M',
				// https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
				flag:
					'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
			},
			{
				name: 'California',
				population: '39.14M',
				// https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
				flag:
					'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
			},
			{
				name: 'Florida',
				population: '20.27M',
				// https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
				flag:
					'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
			},
			{
				name: 'Texas',
				population: '27.47M',
				// https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
				flag:
					'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
			}
		];

		this.stateCtrl = new FormControl();
		this.filteredStates = this.stateCtrl.valueChanges.pipe(
			startWith(''),
			map(
				state =>
					state ? this.filterStates(state) : this.states.slice()
			)
		);
	}

	ngOnInit() {}

	filterStates(name: string) {
		return this.states.filter(
			state => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0
		);
	}

	saveAndNew(): void {}

	save(type?: string): void {
		debugger;
		this.activeModal.close(type);
	}
}
