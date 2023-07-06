import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Booking } from './bookingModel';
import { Router } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  bookingForm!: FormGroup;
  bookingData!:[];
  bookingModelObj:  Booking = new Booking();
  

  constructor(private formBuilder: FormBuilder, private router: Router, private booking:BookingService) { }

  ngOnInit() {
    this.bookingForm = this.formBuilder.group({
      carId: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required],
      paymentMethod: ['', Validators.required]
    });
  }


  submitForm() {
    this.bookingModelObj.carId = this.bookingForm.value.carId;
    this.bookingModelObj.startDate = this.bookingForm.value.startDate;
    this.bookingModelObj.endDate = this.bookingForm.value.endDate;
    this.bookingModelObj.fullName = this.bookingForm.value.fullName;
    this.bookingModelObj.email = this.bookingForm.value.email;
    this.bookingModelObj.phoneNumber = this.bookingForm.value.phoneNumber;
    this.bookingModelObj.paymentMethod = this.bookingForm.value.paymentMethod;
    this.booking.addBooking(this.bookingModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Booking details received");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.bookingForm.reset();
      });
      this.router.navigate(['/admin/booking-confirmation'], { state: {this:this.bookingData } });
  }
  
}





