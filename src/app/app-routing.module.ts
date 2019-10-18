import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PaymentsListComponent} from './payments-list/payments-list.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';

const routes: Routes = [
  {path: '', component: PaymentsListComponent },
  { path: 'paymentDetail/:id', component: PaymentDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
