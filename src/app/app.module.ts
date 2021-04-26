import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Firebase services + environment modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { HomeComponent } from './components/home/home.component';

// Auth service
import { AuthService } from "./shared/services/auth.service";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WorkordersTableComponent } from './components/workorders-table/workorders-table.component';

// Angular Material and other required package imports
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule} from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';

// Component imports
import { SignupCustomerFormComponent } from './components/signup-customer-form/signup-customer-form.component';
import { CreateWorkorderFormComponent } from './components/create-workorder-form/create-workorder-form.component';
import { NavComponent } from './components/nav/nav.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { NavWorkerComponent } from './components/nav-worker/nav-worker.component';
import { HomeWorkerComponent } from './components/home-worker/home-worker.component';
import { SignupWorkerFormComponent } from './components/signup-worker-form/signup-worker-form.component';
import { InitialPageCustomerComponent } from './components/initial-page-customer/initial-page-customer.component';
import { InitialPageWorkerComponent } from './components/initial-page-worker/initial-page-worker.component';
import { CustomerProfileComponent } from './components/customer-profile/customer-profile.component';
import { WorkerProfileComponent } from './components/worker-profile/worker-profile.component';
import { WorkerCurrentJobComponent } from './components/worker-current-job/worker-current-job.component';
import { SettingsCustomerComponent } from './components/settings-customer/settings-customer.component';
import { SettingsWorkerComponent } from './components/settings-worker/settings-worker.component';
import { ContactCustomerComponent } from './components/contact-customer/contact-customer.component';
import { ContactWorkerComponent } from './components/contact-worker/contact-worker.component';
import { FaqCustomerComponent } from './components/faq-customer/faq-customer.component';
import { FaqWorkerComponent } from './components/faq-worker/faq-worker.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { JobTypeTableComponent } from './components/job-type-table/job-type-table.component';
import { DistrictsTableComponent } from './components/districts-table/districts-table.component';
import { CustomersTableComponent } from './components/customers-table/customers-table.component';
import { WorkersTableComponent } from './components/workers-table/workers-table.component';
import { NavAdministratorComponent } from './components/nav-administrator/nav-administrator.component';
import { InitialPageAdministratorComponent } from './components/initial-page-administrator/initial-page-administrator.component';
import { AdministratorLoginComponent } from './components/administrator-login/administrator-login.component';
import { AdminCustomerOperationsComponent } from './components/admin-customer-operations/admin-customer-operations.component';
import { AdminWorkerOperationsComponent } from './components/admin-worker-operations/admin-worker-operations.component';
import { DistrictJobtypeOperationsComponent } from './components/district-jobtype-operations/district-jobtype-operations.component';
import { CustomerWorkordersTableComponent } from './components/customer-workorders-table/customer-workorders-table.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { AdminActiveWorkordersTableComponent } from './components/admin-active-workorders-table/admin-active-workorders-table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    WorkordersTableComponent,
    SignupCustomerFormComponent,
    CreateWorkorderFormComponent,
    NavComponent,
    HomeComponent,
    IndexPageComponent,
    NavWorkerComponent,
    HomeWorkerComponent,
    SignupWorkerFormComponent,
    InitialPageCustomerComponent,
    InitialPageWorkerComponent,
    CustomerProfileComponent,
    WorkerProfileComponent,
    WorkerCurrentJobComponent,
    SettingsCustomerComponent,
    SettingsWorkerComponent,
    ContactCustomerComponent,
    ContactWorkerComponent,
    FaqCustomerComponent,
    FaqWorkerComponent,
    ContactPageComponent,
    JobTypeTableComponent,
    DistrictsTableComponent,
    CustomersTableComponent,
    WorkersTableComponent,
    NavAdministratorComponent,
    InitialPageAdministratorComponent,
    AdministratorLoginComponent,
    AdminCustomerOperationsComponent,
    AdminWorkerOperationsComponent,
    DistrictJobtypeOperationsComponent,
    CustomerWorkordersTableComponent,
    AdminActiveWorkordersTableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatSnackBarModule,

  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatSnackBarModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
