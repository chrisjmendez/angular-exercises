import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Twoway Binding
import { FormsModule }   from '@angular/forms';
//App routing
import { RouterModule }  from '@angular/router';
//HTTP GET/POST requests
import { HttpModule }    from '@angular/http';
//Twitter Bootstrap
import { NgbModule }     from '@ng-bootstrap/ng-bootstrap';
//Routing
import { AppRoutingModule }    from './app-routing.module';
//App Specific Libraries
import { AppComponent }       from './app.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent }     from './heroes/heroes.component';
import { HeroService }         from './services/hero.service';
import { HeroSearchComponent } from './hero-search/hero-search.component';

@NgModule({
	imports: [
		NgbModule,
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
		DashboardComponent,
		HeroSearchComponent
	],
	//Singleton Providers
	providers: [HeroService],
	bootstrap: [AppComponent]
})

export class AppModule { }
