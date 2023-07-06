import { Injectable } from '@angular/core';
import{HttpClient} from'@angular/common/http'
import { Booking } from '../modules/admin/components/booking/bookingModel';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  baseUrl = "http://localhost:3000/booking";

  constructor(private http: HttpClient) { }

  
  getBooking() {
    return this.http.get<Booking[]>(this.baseUrl);
  }

  addBooking(data: any) {
    return this.http.post<Booking>(this.baseUrl, data);
  }

  getLastBooking(){
    return this.http.get<Booking[]>(`${this.baseUrl}?_sort=id&_order=desc&_limit=1`);
  }

}
