import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateShellComponent } from './create-shell/create-shell.component';
import { CreateFormComponent } from './create-form.component';

const routes: Routes = [
  {
    path:'',
    component:CreateFormComponent,
    children:[
      {
          path:'create/:id',
          component:CreateShellComponent,
       }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateShellRoutingModule { }
