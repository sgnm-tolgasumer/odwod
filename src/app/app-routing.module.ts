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
import {InitialPageCustomerComponent} from './components/initial-page-customer/initial-page-customer.component';
import {InitialPageWorkerComponent} from './components/initial-page-worker/initial-page-worker.component';
import {WorkerProfileComponent} from './components/worker-profile/worker-profile.component';
import {CustomerProfileComponent} from './components/customer-profile/customer-profile.component';
import {SettingsCustomerComponent} from './components/settings-customer/settings-customer.component';
import {SettingsWorkerComponent} from './components/settings-worker/settings-worker.component';
import {ContactCustomerComponent} from './components/contact-customer/contact-customer.component';
import {ContactWorkerComponent} from './components/contact-worker/contact-worker.component';

const routes: Routes = [
  { path: '', redirectTo: '/index-page', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: 'nav', component: NavComponent, children: [
      { path: 'home', component: HomeComponent },
      { path: 'initial-page-customer', component: InitialPageCustomerComponent },
      { path: 'customer-profile', component: CustomerProfileComponent },
      { path: 'settings-customer', component: SettingsCustomerComponent },
      { path: 'contact-customer', component: ContactCustomerComponent }]},
  { path: 'nav-worker', component: NavWorkerComponent, children: [
      { path: 'home-worker', component: HomeWorkerComponent },
      { path: 'initial-page-worker', component: InitialPageWorkerComponent },
      { path: 'worker-profile', component: WorkerProfileComponent },
      { path: 'settings-worker', component: SettingsWorkerComponent },
      { path: 'contact-worker', component: ContactWorkerComponent }]},
  { path: 'index-page', component: IndexPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
