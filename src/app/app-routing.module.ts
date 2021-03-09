import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

import { AuthGuard } from './shared/guard/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import {NavWorkerComponent} from './components/nav-worker/nav-worker.component';
import {HomeWorkerComponent} from './components/home-worker/home-worker.component';

const routes: Routes = [
  { path: '', redirectTo: '/index-page', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'nav', component: NavComponent, children: [
      { path: 'home', component: HomeComponent }]},
  { path: 'nav-worker', component: NavWorkerComponent, children: [
      { path: 'home-worker', component: HomeWorkerComponent }]},
  { path: 'index-page', component: IndexPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
