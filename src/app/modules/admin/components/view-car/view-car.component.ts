import { Component ,OnInit} from '@angular/core';
import { ApiService } from '../api.service';
import { cardata } from '../car-list/model';

@Component({
  selector: 'app-view-car',
  templateUrl: './view-car.component.html',
  styleUrls: ['./view-car.component.css']
})
export class ViewCarComponent implements OnInit {
car!:cardata[];
  constructor(private api:ApiService){ }

  ngOnInit(): void {
    this.getcar();
  }
  getcar(){
    this.api.getcar().subscribe((res)=>{
    this.car =res;
    console.log(res);
    })
  }

  //delete 
  deletecar(id:number){
    if(confirm('Are you sure to delete?'))
    this.api.deletecar(id).subscribe((res)=>{

    })
    this.getcar();
  }
}
