import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor() {}

  initiatePayment(): Observable<string> {
    const paymentId = 'PAYMENT123';
    return of(paymentId);
  }

  verifyPayment(paymentId: string): Observable<boolean> {
    const isPaymentValid = paymentId === 'PAYMENT123';
    return of(isPaymentValid);
  }

}
