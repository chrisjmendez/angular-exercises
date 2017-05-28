import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

import { AppComponent } from '../app.component';
import { SignUpComponent } from '../shared/security/sign-up/sign-up.component';
import { SignInComponent } from '../shared/security/sign-in/sign-in.component';
import { HomeComponent } from '../public/home/home.component';
import { DashboardComponent } from '../private/dashboard/dashboard.component';
import { ResetComponent } from '../shared/security/reset/reset.component';

const routes: Routes = [
    //{ path: '', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    { path: 'login', component: SignInComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'register', component: SignInComponent },
    { path: 'reset', component: ResetComponent },
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


