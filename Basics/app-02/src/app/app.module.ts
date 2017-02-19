import {APP_BASE_HREF} from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Twoway Binding
import { FormsModule } from '@angular/forms';

//App routing
import { RouterModule }   from '@angular/router';

//HTTP GET/POST requests
import { HttpModule } from '@angular/http';

//Twitter Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//App Specific Libraries
import { AppComponent } from './app.component';
import { HeroService }         from './services/hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent
	],
	imports: [
		NgbModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot([
			{
				path: '',
				redirectTo: '/dashboard',
				pathMatch: 'full'
			},
			{
				path: 'heroes',
				component: HeroesComponent
			},
			{
				path: 'detail/:id',
				component: HeroDetailComponent
			},
			{
				path: 'dashboard',
				component: DashboardComponent
			}
		])	  
	],
	//Singleton Providers
	providers: [
		{ 
			provide: APP_BASE_HREF, 
			useValue : '/' 
		},
		HeroService
	],
	bootstrap: [AppComponent]
})

export class AppModule { }
