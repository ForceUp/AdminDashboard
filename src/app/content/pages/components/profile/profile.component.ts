import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SubheaderService } from '../../../../core/services/layout/subheader.service';

@Component({
	selector: 'm-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
	constructor(public subheaderService: SubheaderService) {}

	ngOnInit() {
		this.subheaderService.title$.next('Profile');
	}
}
