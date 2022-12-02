import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
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

const routes: Routes = [
  {path:"",component:HomeComponent},
  { path: 'bootcampList', component: CreateBootcampComponent,canActivate:[LoginGuard] },
  { path: 'blacklist', component: CreateBlackListComponent,canActivate:[LoginGuard]  },
  { path: 'employee', component: CreateEmployeeComponent,canActivate:[LoginGuard]  },
  { path: 'applicant', component: CreateApplicantComponent,canActivate:[LoginGuard]  },
  { path: 'instructor', component: CreateInstructorComponent,canActivate:[LoginGuard]  },
  { path: 'application', component: CreateApplicationComponent,canActivate:[LoginGuard]  },
  { path: 'add-applicant', component: AddApplicantComponent,canActivate:[LoginGuard]  },
  { path: 'add-blacklist', component: AddBlackListComponent,canActivate:[LoginGuard]  },
  { path: 'add-instructor', component: AddInstructorComponent,canActivate:[LoginGuard]  },
  { path: 'add-bootcamp', component: AddBootcampComponent,canActivate:[LoginGuard]  },
  { path: 'add-employee', component: AddEmployeeComponent,canActivate:[LoginGuard]  },
  { path: 'add-application', component: AddApplicationComponent,canActivate:[LoginGuard]  },
  
  { path: 'update-applicant/:id', component: UpdateApplicantComponent ,canActivate:[LoginGuard] },
  { path: 'update-blacklist/:id', component: UpdateBlackListComponent,canActivate:[LoginGuard]  },
  { path: 'update-instructor/:id', component: UpdateInstructorComponent ,canActivate:[LoginGuard] },
  { path: 'update-bootcamp/:id', component: UpdateBootcampComponent ,canActivate:[LoginGuard] },
  { path: 'update-employee/:id', component: UpdateEmployeeComponent ,canActivate:[LoginGuard] },
  { path: 'update-application/:id', component: UpdateApplicationComponent ,canActivate:[LoginGuard] },

  { path: 'applicant-detail/:id', component: DetailApplicantComponent,canActivate:[LoginGuard]   },
  { path: 'blacklist-detail/:id', component: DetailBlackListComponent,canActivate:[LoginGuard]  },
  { path: 'instructor-detail/:id', component: DetailInstructorComponent,canActivate:[LoginGuard]  },
  { path: 'bootcamp-detail/:id', component: DetailBootcampComponent,canActivate:[LoginGuard]  },
  { path: 'employee-detail/:id', component: DetailEmployeeComponent ,canActivate:[LoginGuard] },
  { path: 'application-detail/:id', component: DetailApplicationComponent,canActivate:[LoginGuard]  },
  { path: 'login', component: LoginComponent },
  { path: "register", component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
