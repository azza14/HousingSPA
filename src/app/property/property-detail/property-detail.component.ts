import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
   public PropertyId:number;
  constructor( private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.PropertyId= + this.route.snapshot.params['id'];
    //  console.log(this.PropertyId)
  }
  onSelctNext(){
  this.PropertyId += 1;
  this.router.navigate(['property-detail',this.PropertyId]);
  }

}
