import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { AppComponent } from '../app.component';

import { SignUpComponent } from '../shared/registration/sign-up/sign-up.component';
import { SignInComponent } from '../shared/registration/sign-in/sign-in.component';
import { ResetComponent } from '../shared/registration/reset/reset.component';
import { HomeComponent } from '../public/home/home.component';
import { DashboardComponent } from '../private/dashboard/dashboard.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'login', component: SignInComponent },
    { path: 'signin', redirectTo: '/login', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register', component: SignUpComponent },
    { path: 'signup', redirectTo: '/register', pathMatch: 'full' },
    { path: 'reset', component: ResetComponent },
    { path: 'forgot', redirectTo: '/reset', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  //Components in companion module have access to RouterLink and RouterOutlet
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }


