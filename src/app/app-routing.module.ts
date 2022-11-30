import { CreateBootcampComponent } from './components/bootcamp/create-bootcamp/create-bootcamp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path:"bootcampList",component:CreateBootcampComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
