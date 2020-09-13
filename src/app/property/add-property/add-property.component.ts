import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(form:NgForm){
    console.log('onSubmit') ;
    console.log(form)

  }
  onBack(){
  this.router.navigate(['/']);
  }

}
