import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Twoway Binding
import { FormsModule } from '@angular/forms';

//HTTP GET/POST requests
import { HttpModule } from '@angular/http';

//Twitter Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
