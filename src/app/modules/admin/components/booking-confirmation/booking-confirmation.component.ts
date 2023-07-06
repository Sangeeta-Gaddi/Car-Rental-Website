import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking/bookingModel';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {
  bookingData!: Booking[];

  constructor(private route: ActivatedRoute,private booking:BookingService) { }

  ngOnInit() {
    this.getBookingDetails();
  
  }

  getBookingDetails(){
    this.booking.getLastBooking().subscribe((booking: any) => {
      this.bookingData = booking;
    });


}
}



 