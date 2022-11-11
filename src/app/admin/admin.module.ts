import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { SubNavComponent } from './subnav.component';
import { LayoutComponent } from './layout.component';
import { ListFormComponent } from './list-form/list-form.component';
import { AddFormComponent } from './add-form/add-form.component';
import { QContentComponent } from './q-content/q-content.component';
import { DisplayContentComponent } from './display-content/display-content.component';

@NgModule({
  declarations: [
  SubNavComponent,
  LayoutComponent,
  ListFormComponent,
  AddFormComponent,
  QContentComponent,
  DisplayContentComponent,
],
  imports: [ 
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
