import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  {path:'',component:AdminDashboardComponent,
children:[
  {path:'user',component:UserComponent},
  {path:'', redirectTo:'/admin/user', pathMatch:'full'}
],
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
