import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { AddFormComponent } from './add-form/add-form.component';
import { ListFormComponent } from './list-form/list-form.component';

const routes: Routes = [
  { path: '', component: SubNavComponent, outlet: 'subNav' },
  {
      path: '', component: LayoutComponent,
      children: [
        { path:'viewForms',component:ListFormComponent},
        { path: 'addForm', component: AddFormComponent },
        
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
