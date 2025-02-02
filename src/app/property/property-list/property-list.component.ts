import { Component, OnInit, Input } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import{IProperty} from './../IProperty.interface'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
 SellRent=1;
  properties:Array<IProperty>;
  constructor( private route:ActivatedRoute ,private service:HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent=2;
    }
    this.service.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
      console.log(data);
    },
    error=>{
      console.log(error);
    }
    );
  }

}
