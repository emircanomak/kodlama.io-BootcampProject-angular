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
import { LoginComponent } from './components/login/login.component';

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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
