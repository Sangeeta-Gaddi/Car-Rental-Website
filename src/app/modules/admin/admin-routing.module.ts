import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserComponent } from './components/user/user.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
children:[
  {path:'user',component:UserComponent},
  {path:'booking', component:BookingComponent},
  {path:'booking-confirmation', component:BookingConfirmationComponent},
  {path:'payment', component:PaymentComponent},
  {path:'', redirectTo:'/admin/user', pathMatch:'full'}
],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
