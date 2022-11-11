import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateShellComponent } from './create-shell/create-shell.component';
import { ShorttextComponent } from './shell-type/shorttext.component';
import { CreateShellRoutingModule } from './create-shell-routing.module';
import { MultiChoiceComponent } from './shell-type/multi-choice/multi-choice.component';
import { TypeComponent } from './type/type.component';
import { ContentComponent } from './content/content.component';
import { ContentListComponent } from './content-list/content-list.component';
import { CreateFormComponent } from './create-form.component';


@NgModule({
  declarations: [
    CreateShellComponent,
    ShorttextComponent,
    MultiChoiceComponent,
    TypeComponent,
    ContentComponent,
    ContentListComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CreateShellRoutingModule
  ]
})
export class CreateShellModule { }
