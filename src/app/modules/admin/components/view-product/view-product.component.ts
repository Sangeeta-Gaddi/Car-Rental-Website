import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { cardata } from '../add-car/carmodel';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  car:undefined|cardata[];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getcar();
    
  }

  getcar(){
    this.api.getcar().subscribe(res=>{
      this.car=res;
      console.log(res);

    })
  }

  //delete
  deletecar(id:number){
    if(confirm('Are you sure to delete car'))
    this.api.deletecar(id).subscribe((res)=>{

    })
    this.getcar();
  }

}
