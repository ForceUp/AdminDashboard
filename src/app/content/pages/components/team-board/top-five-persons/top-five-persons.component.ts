import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'm-top-five-persons',
	templateUrl: './top-five-persons.component.html',
	styleUrls: ['./top-five-persons.component.scss']
})
export class TopFivePersonsComponent implements OnInit {
	topFivePersons: any;
	constructor() {
		this.topFivePersons = {
			salesAcheiver: [
				{
					logo: 'assets/app/media/img/client-logos/logo5.png',
					name: 'Dinesh',
					desc: 'Make metronic great again !',
					amount: '+2500'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo4.png',
					name: 'Mohan',
					desc: 'Good API Dev',
					amount: '-290'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo3.png',
					name: 'Rajesh',
					desc: 'Good API Dev',
					amount: '+120'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo2.png',
					name: 'Polla',
					desc: 'Good UI Dev',
					amount: '-17'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo1.png',
					name: 'karthik',
					desc: 'Good API Dev',
					amount: '+200'
				}
			],
			pipeline: [
				{
					logo: 'assets/app/media/img/client-logos/logo5.png',
					name: 'Dinesh',
					desc: 'Make metronic great again !',
					amount: '+2500'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo4.png',
					name: 'Mohan',
					desc: 'Good API Dev',
					amount: '-290'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo3.png',
					name: 'Rajesh',
					desc: 'Good API Dev',
					amount: '+120'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo2.png',
					name: 'Polla',
					desc: 'Good UI Dev',
					amount: '-17'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo1.png',
					name: 'karthik',
					desc: 'Good API Dev',
					amount: '+200'
				}
			],
			f2f: [
				{
					logo: 'assets/app/media/img/client-logos/logo5.png',
					name: 'Dinesh',
					desc: 'Make metronic great again !',
					amount: '+2500'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo4.png',
					name: 'Mohan',
					desc: 'Good API Dev',
					amount: '-290'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo3.png',
					name: 'Rajesh',
					desc: 'Good API Dev',
					amount: '+120'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo2.png',
					name: 'Polla',
					desc: 'Good UI Dev',
					amount: '-17'
				},
				{
					logo: 'assets/app/media/img/client-logos/logo1.png',
					name: 'karthik',
					desc: 'Good API Dev',
					amount: '+200'
				}
			]
		};
	}

	ngOnInit() {}
}
