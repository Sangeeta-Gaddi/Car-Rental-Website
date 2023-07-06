import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserComponent } from './components/user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { PaymentComponent } from './components/payment/payment.component';




@NgModule({
  declarations: [
    AdminDashboardComponent,
    UserComponent,
    HeaderComponent,
    FooterComponent,
    BookingComponent,
    BookingConfirmationComponent,
    PaymentComponent,
   ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AdminModule { }
