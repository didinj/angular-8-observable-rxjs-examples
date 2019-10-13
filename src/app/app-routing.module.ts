import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcompComponent } from './acomp/acomp.component';
import { BcompComponent } from './bcomp/bcomp.component';

const routes: Routes = [
  {
    path: 'acomp',
    component: AcompComponent,
    data: { title: 'Component A' }
  },
  {
    path: 'bcomp',
    component: BcompComponent,
    data: { title: 'Component B' }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
