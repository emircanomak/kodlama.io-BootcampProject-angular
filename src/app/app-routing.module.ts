import { DetailApplicationComponent } from './components/application/detail-application/detail-application.component';
import { DetailEmployeeComponent } from './components/employee/detail-employee/detail-employee.component';
import { DetailBootcampComponent } from './components/bootcamp/detail-bootcamp/detail-bootcamp.component';
import { DetailInstructorComponent } from './components/instructor/detail-instructor/detail-instructor.component';
import { DetailBlackListComponent } from './components/black-list/detail-black-list/detail-black-list.component';
import { DetailApplicantComponent } from './components/applicant/detail-applicant/detail-applicant.component';
import { LoginComponent } from './components/login/login/login.component';
import { UpdateApplicationComponent } from './components/application/update-application/update-application.component';
import { UpdateEmployeeComponent } from './components/employee/update-employee/update-employee.component';
import { UpdateBootcampComponent } from './components/bootcamp/update-bootcamp/update-bootcamp.component';
import { UpdateInstructorComponent } from './components/instructor/update-instructor/update-instructor.component';
import { UpdateBlackListComponent } from './components/black-list/update-black-list/update-black-list.component';
import { UpdateApplicantComponent } from './components/applicant/update-applicant/update-applicant.component';
import { AddApplicationComponent } from './components/application/add-application/add-application.component';
import { AddEmployeeComponent } from './components/employee/add-employee/add-employee.component';
import { AddBootcampComponent } from './components/bootcamp/add-bootcamp/add-bootcamp.component';
import { AddInstructorComponent } from './components/instructor/add-instructor/add-instructor.component';
import { AddBlackListComponent } from './components/black-list/add-black-list/add-black-list.component';
import { AddApplicantComponent } from './components/applicant/add-applicant/add-applicant.component';
import { CreateApplicationComponent } from './components/application/create-application/create-application.component';
import { CreateApplicantComponent } from './components/applicant/create-applicant/create-applicant.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { CreateBlackListComponent } from './components/black-list/create-black-list/create-black-list.component';
import { CreateBootcampComponent } from './components/bootcamp/create-bootcamp/create-bootcamp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInstructorComponent } from './components/instructor/create-instructor/create-instructor.component';

const routes: Routes = [
  { path: 'bootcampList', component: CreateBootcampComponent },
  { path: 'blacklist', component: CreateBlackListComponent },
  { path: 'employee', component: CreateEmployeeComponent },
  { path: 'applicant', component: CreateApplicantComponent },
  { path: 'instructor', component: CreateInstructorComponent },
  { path: 'application', component: CreateApplicationComponent },
  { path: 'add-applicant', component: AddApplicantComponent },
  { path: 'add-blacklist', component: AddBlackListComponent },
  { path: 'add-instructor', component: AddInstructorComponent },
  { path: 'add-bootcamp', component: AddBootcampComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'add-application', component: AddApplicationComponent },
  
  { path: 'update-applicant/:id', component: UpdateApplicantComponent },
  { path: 'update-blacklist/:id', component: UpdateBlackListComponent },
  { path: 'update-instructor/:id', component: UpdateInstructorComponent },
  { path: 'update-bootcamp/:id', component: UpdateBootcampComponent },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'update-application/:id', component: UpdateApplicationComponent },

  { path: 'applicant-detail/:id', component: DetailApplicantComponent },
  { path: 'blacklist-detail/:id', component: DetailBlackListComponent },
  { path: 'instructor-detail/:id', component: DetailInstructorComponent },
  { path: 'bootcamp-detail/:id', component: DetailBootcampComponent },
  { path: 'employee-detail/:id', component: DetailEmployeeComponent },
  { path: 'application-detail/:id', component: DetailApplicationComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
