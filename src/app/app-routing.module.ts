import { CreateBlackListComponent } from './components/black-list/create-black-list/create-black-list.component';
import { CreateBootcampComponent } from './components/bootcamp/create-bootcamp/create-bootcamp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"bootcampList",component:CreateBootcampComponent},
  {path:"blacklist", component:CreateBlackListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
