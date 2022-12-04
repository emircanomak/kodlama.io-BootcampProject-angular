import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateApplicantComponent } from './components/applicant/create-applicant/create-applicant.component';
import { UpdateApplicantComponent } from './components/applicant/update-applicant/update-applicant.component';
import { CreateApplicationComponent } from './components/application/create-application/create-application.component';
import { UpdateApplicationComponent } from './components/application/update-application/update-application.component';
import { CreateBlackListComponent } from './components/black-list/create-black-list/create-black-list.component';
import { UpdateBlackListComponent } from './components/black-list/update-black-list/update-black-list.component';
import { CreateBootcampComponent } from './components/bootcamp/create-bootcamp/create-bootcamp.component';
import { UpdateBootcampComponent } from './components/bootcamp/update-bootcamp/update-bootcamp.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { CreateInstructorComponent } from './components/instructor/create-instructor/create-instructor.component';
import { UpdateInstructorComponent } from './components/instructor/update-instructor/update-instructor.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { AddApplicantComponent } from './components/applicant/add-applicant/add-applicant.component';
import { AddApplicationComponent } from './components/application/add-application/add-application.component';
import { AddBlackListComponent } from './components/black-list/add-black-list/add-black-list.component';
import { AddBootcampComponent } from './components/bootcamp/add-bootcamp/add-bootcamp.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { AddInstructorComponent } from './components/instructor/add-instructor/add-instructor.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login/login.component';
import { DetailApplicantComponent } from './components/applicant/detail-applicant/detail-applicant.component';
import { DetailApplicationComponent } from './components/application/detail-application/detail-application.component';
import { DetailBlackListComponent } from './components/black-list/detail-black-list/detail-black-list.component';
import { DetailBootcampComponent } from './components/bootcamp/detail-bootcamp/detail-bootcamp.component';
import { DetailEmployeeComponent } from './components/employee/detail-employee/detail-employee.component';
import { DetailInstructorComponent } from './components/instructor/detail-instructor/detail-instructor.component';
import { RegisterComponent } from './components/register/register.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SettingsComponent } from './layouts/settings/settings.component';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { ApplicantComponent } from './pages/applicant/applicant.component';
import { InstructorComponent } from './pages/instructor/instructor.component';
import { ApplicantNavbarComponent } from './layouts/applicant-layouts/applicant-navbar/applicant-navbar.component';
import { ApplicantFooterComponent } from './layouts/applicant-layouts/applicant-footer/applicant-footer.component';




@NgModule({
  declarations: [
    AppComponent,
    CreateApplicantComponent,
    UpdateApplicantComponent,
    CreateApplicationComponent,
    UpdateApplicationComponent,
    CreateBlackListComponent,
    UpdateBlackListComponent,
    CreateBootcampComponent,
    UpdateBootcampComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    CreateInstructorComponent,
    UpdateInstructorComponent,
    NavbarComponent,
    AddApplicantComponent,
    AddApplicationComponent,
    AddBlackListComponent,
    AddBootcampComponent,
    AddEmployeeComponent,
    AddInstructorComponent,
    LoginComponent,
    DetailApplicantComponent,
    DetailApplicationComponent,
    DetailBlackListComponent,
    DetailBootcampComponent,
    DetailEmployeeComponent,
    DetailInstructorComponent,
    RegisterComponent,
    SidebarComponent,
    FooterComponent,
    SettingsComponent,
    AdminComponent,
    HomeComponent,
    ApplicantComponent,
    InstructorComponent,
    ApplicantNavbarComponent,
    ApplicantFooterComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
