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
  { path: 'add-application', component: AddApplicationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
