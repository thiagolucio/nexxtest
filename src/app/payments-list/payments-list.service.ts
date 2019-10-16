import { Injectable } from '@angular/core';
import {PaymentsList} from './payments-list';
import {Observable} from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentsListService {

  constructor(private http: HttpClient) { }

  private readonly APITRASFERLIST = `${environment.API}/v1/transactions`;

  getTransferDetails() {
    throw new Error('Método não implementado.');
  }

  getTransferList(): Observable<PaymentsList[]> {
    return this.http.get<PaymentsList[]>(this.APITRASFERLIST)
      .pipe(
       tap(console.log));
  }


}
