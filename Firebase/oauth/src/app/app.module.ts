import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routes, RouterModule } from '@angular/router';
import { RoutingModule }    from './routing/routing.module';

// Services
import { AuthService } from "./shared/security/auth.service"

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Firebase Config Lives here
import { environment } from '../environments/environment';

// Firebase specific libraries
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { SignUpComponent } from './shared/registration/sign-up/sign-up.component';
import { SignInComponent } from './shared/registration/sign-in/sign-in.component';
import { HomeComponent } from './public/home/home.component';
import { DashboardComponent } from './private/dashboard/dashboard.component';
import { ResetComponent } from './shared/registration/reset/reset.component';

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
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

