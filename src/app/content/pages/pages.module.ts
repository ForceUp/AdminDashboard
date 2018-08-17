import { LayoutModule } from '../layout/layout.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { PartialsModule } from '../partials/partials.module';
import { ActionComponent } from './header/action/action.component';
import { CoreModule } from '../../core/core.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './snippets/error-page/error-page.component';
import { TeamBoardModule } from './components/team-board/team-board.module';
import { ProfileModule } from './components/profile/profile.module';
import { LeadsModule } from './components/leads/leads.module';

@NgModule({
	declarations: [
		PagesComponent,
		ActionComponent,
		ErrorPageComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		FormsModule,
		PagesRoutingModule,
		CoreModule,
		LayoutModule,
		PartialsModule,
		AngularEditorModule,
		TeamBoardModule,
		ProfileModule,
		LeadsModule,
	],
	providers: []
})
export class PagesModule {}
