import { Component, OnInit } from '@angular/core';
import { PaymentsListService } from '../payments-list/payments-list.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location, CurrencyPipe } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';


@Component({
  selector: 'app-payment-detail',
  templateUrl: './payment-detail.component.html',
  styleUrls: ['./payment-detail.component.scss']
})

export class PaymentDetailComponent implements OnInit {

  public colSize = 4;
  public isMobile = false;
  paymentData = [];

  constructor(
    breakpointObserver: BreakpointObserver,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private paymentListService: PaymentsListService,
    private _location: Location) {

    // Metodo observable do breakpoint do layout
    breakpointObserver.observe([
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      this.isMobile = result.matches;
      if (this.isMobile) {
        this.colSize = 1;
      } else {
        this.colSize = 4;
      }
    });

  }

  ngOnInit() {
    this.getDetails();
  }

  getDetails(): void {
    this.route.params.subscribe(params => {
      const idPayment = params['id'];
      this.paymentListService.getTransferList()
        .subscribe((data: any) => {
          const paymentDetail = data.data.filter(payment => payment.id === idPayment);
          this.paymentData = paymentDetail[0];
        });
    });
  }

  onClick() {
    this._location.back();
  }
}
