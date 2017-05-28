import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { RoutingModule }    from './routing/routing.module';

// Firebase Config Lives here
import { environment } from '../environments/environment';

// Firebase specific libraries
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { SignUpComponent } from './shared/security/sign-up/sign-up.component';
import { SignInComponent } from './shared/security/sign-in/sign-in.component';
import { HomeComponent } from './public/home/home.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { ResetComponent } from './shared/security/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    DashboardComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

