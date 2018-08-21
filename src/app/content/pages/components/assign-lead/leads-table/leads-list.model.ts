export interface LeadsModel {
	id?: number;
	photo?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	userName?: string;
	percent?: number;
	value?: number;
	kms?: string;
}

export const leads: LeadsModel[] = [
	{
		id: 1,
		firstName: 'Sonni',
		lastName: 'Gabotti',
		email: 'sgabotti0@wsj.com',
		userName: 'sgabotti0',
		percent: 80.25,
		value: 2,
		kms: '4.2 kms'
	},
	{
		id: 2,
		firstName: 'Abie',
		lastName: 'Cowperthwaite',
		email: 'acowperthwaite1@storify.com',
		userName: 'acowperthwaite1',
		percent: 80.25,
		value: 2,
		kms: '4.2 kms'
	},
	{
		id: 3,
		firstName: 'Melody',
		lastName: 'Stodd',
		email: 'mstodd2@twitpic.com',
		userName: 'mstodd2',
		percent: 80.25,
		value: 2,
		kms: '4.2 kms'
	},
	{
		id: 4,
		firstName: 'Naomi',
		lastName: 'Galbreth',
		email: 'ngalbreth3@springer.com',
		userName: 'ngalbreth3',
		percent: 80.25,
		value: 2,
		kms: '4.2 kms'
	},
	{
		id: 5,
		firstName: 'Ashley',
		lastName: 'Jandl',
		email: 'ajandl4@mapy.cz',
		userName: 'ajandl4',
		percent: 80.25,
		value: 2,
		kms: '4.2 kms'
	},
	{
		id: 6,
		firstName: 'Mildrid',
		lastName: 'Duplan',
		email: 'mduplan5@msn.com',
		userName: 'mduplan5',
		percent: 80.25,
		value: 2,
		kms: '4.2 kms'
	}
];
