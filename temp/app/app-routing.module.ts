import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PreviewComponent } from './preview/preview.component';
const appRoutes: Routes = [
    {
    path:'admin',
    loadChildren: () => import('./create-shell/create-shell.module').then(m => m.CreateShellModule),
    } ,
    {
      path:'preview',
      component:PreviewComponent
    }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }