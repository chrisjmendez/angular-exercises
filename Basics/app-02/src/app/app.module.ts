import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Twoway Binding
import { FormsModule } from '@angular/forms';

//HTTP GET/POST requests
import { HttpModule } from '@angular/http';

//Twitter Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//App Specific Libraries
import { AppComponent } from './app.component';
import { HeroService }         from './services/hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent
  ],
  //Libraries
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  //Data Providers
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
