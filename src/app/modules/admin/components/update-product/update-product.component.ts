import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { cardata } from '../add-car/carmodel';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
    dataid:any;
    public car:cardata={} as cardata;
   constructor(private api:ApiService,private acttiveroute:ActivatedRoute,private router:Router){}

   ngOnInit(): void {
     this.acttiveroute.paramMap.subscribe((param:Params)=>{
      this.dataid=param['get']('id');
      console.log("id is",this.dataid)
     })
     this.api.getcarbyid(this.dataid).subscribe((data:any)=>{
      this.car=data;
     })
   }
   update(){
    this.api.updatecar(this.car,this.dataid).subscribe((data:any)=>{
      this.router.navigate(['/view-product']);
    })
   }
}
