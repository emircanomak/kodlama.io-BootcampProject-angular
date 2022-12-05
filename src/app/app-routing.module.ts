import { ApplicantComponent } from './pages/applicant/applicant.component';
import { AdminComponent } from './pages/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
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
import { LoginGuard } from './guards/login.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:"home-login",component:LoginComponent},
   {path:"home-register",component:RegisterComponent},
  //Child of home
    {path:"" , component:HomeComponent,children:[
    // {path:"home-login",component:LoginComponent},
    // {path:"home-register",component:RegisterComponent},
    {path:"home-bootcamp",component:CreateBootcampComponent}
  ]},

  //Child of admin
  {path:"admin",component:AdminComponent,canActivate:[LoginGuard], children:[
  { path: 'admin-application', component: CreateApplicationComponent,},
  { path: 'admin-bootcampList', component: CreateBootcampComponent},
  { path: 'admin-blacklist', component: CreateBlackListComponent},
  { path: 'admin-applicant', component: CreateApplicantComponent},
  { path: 'admin-instructor', component: CreateInstructorComponent},
  { path: 'admin-employee', component: CreateEmployeeComponent},

  //Child of admin-application-child
  { path: 'admin-application/add-application', component: AddApplicationComponent},
  { path: 'admin-application/update-application/:id', component: UpdateApplicationComponent},
  { path: 'admin-application/application-detail/:id', component: DetailApplicationComponent},
  //end of admin-application

  //Child of admin-bootcamp-child
  { path: 'admin-bootcampList/add-bootcampList', component: AddBootcampComponent },
  { path: 'admin-bootcampList/update-bootcampList/:id', component: UpdateBootcampComponent},
  { path: 'admin-bootcampList/bootcampList-detail/:id', component: DetailBootcampComponent},
  //end of admin-bootcampList

  //Child of admin-blacklist-child
  { path: 'admin-blacklist/add-blacklist', component: AddBlackListComponent},
  { path: 'admin-blacklist/update-blacklist/:id', component: UpdateBlackListComponent},
  { path: 'admin-blacklist/blacklist-detail/:id', component: DetailBlackListComponent},
  //end of blacklist

  //Child of admin-applicant-child
  { path: 'admin-applicant/add-applicant', component: AddApplicantComponent},
  { path: 'admin-applicant/update-applicant/:id', component: UpdateApplicantComponent},
  { path: 'admin-applicant/applicant-detail/:id', component: DetailApplicantComponent},
  //end of admin-applicant

  //Child of admin-instructor-child
  { path: 'admin-instructor/add-instructor', component: AddInstructorComponent},
  { path: 'admin-instructor/update-instructor/:id', component: UpdateInstructorComponent},
  { path: 'admin-instructor/instructor-detail/:id', component: DetailInstructorComponent},
  //end of admin-instructor

  //Child of admin-employee-child
  { path: 'admin-employee/add-employee', component: AddEmployeeComponent },
  { path: 'admin-employee/update-employee/:id', component: UpdateEmployeeComponent },
  { path: 'admin-employee/employee-detail/:id', component: DetailEmployeeComponent },
   //end of admin-employee

   // Admin login 
  { path: 'login', component: LoginComponent },
  { path: "register", component:RegisterComponent}

  ]},

  //  //child of applicant
 {path:"applicant",component:ApplicantComponent,canActivate:[LoginGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
