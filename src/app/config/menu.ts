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
						page: '/leads/import'
					},
					{
						title: 'Productivity',
						root: true,
						icon: 'flaticon-paper-plane',
						badge: {
							type: 'm-badge--brand m-badge--wide',
							value: '79%'
						},
						page: '/productivity'
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
					},
					{
						title: 'Profile Performance',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-network',
						page: '/profile-performance'
					},
					{
						title: 'Leads Board',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-8',
						page: '/assign-lead'
					},
					{
						title: 'Pipeline',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-business',
						page: '/pipeline'
					},
					{
						title: 'Deals',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-6',
						page: '/deals'
					},
					{
						title: 'Miscellaneous',
						root: true,
						bullet: 'dot',
						icon: 'flaticon-interface-3',
						page: '/miscellaneous'
					}
				]
			}
		};
	}
}
