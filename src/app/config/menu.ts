// tslint:disable-next-line:no-shadowed-variable
import { ConfigModel } from '../core/interfaces/config';

// tslint:disable-next-line:no-shadowed-variable
export class MenuConfig implements ConfigModel {
	public config: any = {};

	constructor() {
		this.config = {
			header: {
				self: {},
				items: [
					{
						title: 'Import Leads',
						root: true,
						icon: 'flaticon-file',
						page: '/leads/import',
					}
				]
			},
			aside: {
				self: {},
				items: [
					{
						title: 'Dashboard',
						desc: 'Some description goes here',
						root: true,
						icon: 'flaticon-line-graph',
						page: '/',
						translate: 'MENU.DASHBOARD'
					},
					{
						title: 'Team Board',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-user',
						page: '/team-board'
					}
				]
			}
		};
	}
}
