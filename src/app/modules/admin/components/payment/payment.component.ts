import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  constructor(private router: Router, private paymentService: PaymentService) {}

  ngOnInit() {
    
  }

  initiatePayment() {
    this.paymentService.initiatePayment().subscribe((paymentId: string) => {
      alert('Your Payment ID is'+ paymentId);
    });
  }

  verifyPayment(paymentId: string) {
    this.paymentService.verifyPayment(paymentId).subscribe((isPaymentValid: boolean) => {
      if (isPaymentValid) {
       alert('Payment successfull');
      } else {
        alert('Chcek your payment ID and try again');
        this.router.navigate(['/booking-confirmation']);
      }
    });
  }
}
