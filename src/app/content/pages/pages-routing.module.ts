import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ActionComponent } from './header/action/action.component';
import { NgxPermissionsGuard } from 'ngx-permissions';
import { ProfileComponent } from './components/profile/profile.component';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { AgentPerformanceComponent } from './components/agent-performance/agent-performance.component';

const routes: Routes = [
	{
		path: '',
		component: PagesComponent,
		canActivate: [NgxPermissionsGuard],
		data: {
			permissions: {
				only: ['ADMIN', 'USER', 'GUEST'],
				// except: ['GUEST'],
				redirectTo: '/login'
			}
		},
		children: [
			{
				path: '',
				loadChildren:
					'./components/dashboard/dashboard.module#DashboardModule'
			},
			{
				path: 'team-board',
				loadChildren:
					'./components/team-board/team-board.module#TeamBoardModule'
			},
			{
				path: 'header/actions',
				component: ActionComponent
			},
			{
				path: 'assign-lead',
				loadChildren:
					'./components/assign-lead/assign-lead.module#AssignLeadModule'
			},
			{
				path: 'profile-performance',
				component: AgentPerformanceComponent
			},
			{
				path: 'profile',
				loadChildren:
					'./components/profile/profile.module#ProfileModule'
			},
			{
				path: 'leads',
				loadChildren: './components/leads/leads.module#LeadsModule'
			},
			{
				path: 'pipeline',
				loadChildren:
					'./components/pipeline/pipeline.module#PipelineModule'
			},
			{
				path: 'deals',
				loadChildren: './components/deals/deals.module#DealsModule'
			},
			{
				path: 'miscellaneous',
				loadChildren:
					'./components/user-onboarding/user-onboarding.module#UserOnboardingModule'
			},
			{
				path: 'productivity',
				loadChildren:
					'./components/productivity/productivity.module#ProductivityModule'
			}
		]
	},
	{
		path: 'login',
		canActivate: [NgxPermissionsGuard],
		loadChildren: './auth/auth.module#AuthModule',
		data: {
			permissions: {
				except: 'ADMIN'
			}
		}
	},
	{
		path: '404',
		component: ErrorPageComponent
	},
	{
		path: 'error/:type',
		component: ErrorPageComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PagesRoutingModule {}
