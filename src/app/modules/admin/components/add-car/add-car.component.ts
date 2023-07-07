import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { cardata } from './carmodel';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  
  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    
  }
  adddata(data:cardata){
    // console.log(data)
    this.api.addcar(data).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['/view-product'])
    }
    )

  }
}
