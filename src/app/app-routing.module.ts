import { CreateApplicationComponent } from './components/application/create-application/create-application.component';
import { CreateApplicantComponent } from './components/applicant/create-applicant/create-applicant.component';
import { CreateEmployeeComponent } from './components/employee/create-employee/create-employee.component';
import { CreateBlackListComponent } from './components/black-list/create-black-list/create-black-list.component';
import { CreateBootcampComponent } from './components/bootcamp/create-bootcamp/create-bootcamp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInstructorComponent } from './components/instructor/create-instructor/create-instructor.component';

const routes: Routes = [

  {path:"bootcampList",component:CreateBootcampComponent},
  {path:"blacklist", component:CreateBlackListComponent},
  {path:"employee", component:CreateEmployeeComponent},
  {path:"applicant", component:CreateApplicantComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
