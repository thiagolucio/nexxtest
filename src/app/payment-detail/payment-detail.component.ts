import { Component, OnInit, Inject } from '@angular/core';
import { PaymentsListService } from '../payments-list/payments-list.service';
import { PaymentsList } from '../payments-list/payments-list';
import { ActivatedRoute, Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})
export class PaymentDetailComponent implements OnInit {

  paymentData: any;

  // constructor(
  //   private readonly route: ActivatedRoute,
  //   private readonly router: Router,
  //   private paymentListService: PaymentsListService,
  //   @Inject(MAT_DIALOG_DATA) public data: any) { }
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private paymentListService: PaymentsListService) { }

  ngOnInit() {
    // console.log('PARAMETROS ', this.route.params['']);
    this.route.params.subscribe(params => {
      const idPayment = params['id'];     
      this.paymentListService.getTransferList()
      .subscribe((data: PaymentsList[]) => {
        let paymentDetail = data.filter( payment => payment.id == idPayment); 

        console.log('DATA', data); 
        this.paymentData = paymentDetail[0]; 
        console.log('PAYMENT DETAIL[o]', paymentDetail[0]);     
        console.log('PAYMENT DATA', this.paymentData);     
      });
      console.log('RECEBENDO ID', params['id']);
      console.log('NOME PAGADOR', this.paymentData);
      
    });    
  }

}
