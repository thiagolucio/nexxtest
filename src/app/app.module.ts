import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PaymentsListComponent } from './payments-list/payments-list.component';
import { PaymentDetailComponent } from './payment-detail/payment-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    PaymentsListComponent,
    PaymentDetailComponent,
           
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule    
  ],
  exports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PaymentDetailComponent]
})
export class AppModule { }
