export interface CustomerModel {
	id: number;
	firstName: string;
	lastName: string;
	email: string;
	userName: string;
	gender: string;
	status: number; // 0 = Active | 1 = Suspended | Pending = 2
	dateOfBbirth: string;
	dob: Date;
	ipAddress: string;
	type: number; // 0 = Business | 1 = Individual
	_userId: number;
	_createdDate: string;
	_updatedDate: string;
}

export const customers: any = [
	{
		id: 1,
		firstName: 'Sonni',
		lastName: 'Gabotti',
		email: 'sgabotti0@wsj.com',
		userName: 'sgabotti0',
		gender: 'Female',
		status: 0,
		dateOfBbirth: '10/14/1950',
		ipAddress: '251.237.126.210',
		type: 1,
		_userId: 1,
		_createdDate: '09/07/2016',
		_updatedDate: '05/31/2013'
	},
	{
		id: 2,
		firstName: 'Abie',
		lastName: 'Cowperthwaite',
		email: 'acowperthwaite1@storify.com',
		userName: 'acowperthwaite1',
		gender: 'Male',
		status: 1,
		dateOfBbirth: '12/31/1998',
		ipAddress: '239.176.5.218',
		type: 1,
		_userId: 2,
		_createdDate: '03/18/2014',
		_updatedDate: '08/17/2016'
	},
	{
		id: 3,
		firstName: 'Melody',
		lastName: 'Stodd',
		email: 'mstodd2@twitpic.com',
		userName: 'mstodd2',
		gender: 'Female',
		status: 0,
		dateOfBbirth: '7/3/1957',
		ipAddress: '14.80.25.15',
		type: 1,
		_userId: 1,
		_createdDate: '07/03/2015',
		_updatedDate: '01/28/2015'
	},
	{
		id: 4,
		firstName: 'Naomi',
		lastName: 'Galbreth',
		email: 'ngalbreth3@springer.com',
		userName: 'ngalbreth3',
		gender: 'Female',
		status: 2,
		dateOfBbirth: '12/30/1976',
		ipAddress: '239.198.18.122',
		type: 0,
		_userId: 2,
		_createdDate: '06/22/2013',
		_updatedDate: '01/31/2011'
	},
	{
		id: 5,
		firstName: 'Ashley',
		lastName: 'Jandl',
		email: 'ajandl4@mapy.cz',
		userName: 'ajandl4',
		gender: 'Female',
		status: 1,
		dateOfBbirth: '11/23/1996',
		ipAddress: '11.19.64.48',
		type: 1,
		_userId: 1,
		_createdDate: '01/30/2018',
		_updatedDate: '05/22/2014'
	},
	{
		id: 6,
		firstName: 'Mildrid',
		lastName: 'Duplan',
		email: 'mduplan5@msn.com',
		userName: 'mduplan5',
		gender: 'Female',
		status: 1,
		dateOfBbirth: '4/21/1954',
		ipAddress: '104.18.128.93',
		type: 1,
		_userId: 1,
		_createdDate: '03/27/2011',
		_updatedDate: '09/02/2015'
	}
];
