import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
 registerationForm:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerationForm= new FormGroup ({
    userName:new FormControl( 'Azza',Validators.required),
    userPassword: new FormControl('123',Validators.required),
    email:new FormControl(null,[Validators.required,Validators.email])
    })
  }
  onSubmit(){
console.log(this.registerationForm)
  }

}
