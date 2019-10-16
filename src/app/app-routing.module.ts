import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentsListComponent} from './payments-list/payments-list.component';

const routes: Routes = [
  {path: '', component: PaymentsListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
