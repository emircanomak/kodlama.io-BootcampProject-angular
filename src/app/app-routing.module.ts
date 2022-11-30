import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { CreateApplicantComponent } from './components/applicant/create-applicant/create-applicant.component';
import { CreateBootcampComponent } from './components/bootcamp/create-bootcamp/create-bootcamp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"bootcampList",component:CreateBootcampComponent},
  {path:"applicantList",component:CreateApplicantComponent},
  {path:"employeeList",component:CreateEmployeeComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
