import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  model: userDetails;
  
  userForm;

  newUser(){
    this.model 
  }

  onClickSubmit(data) { 
        
        console.log(data)
        console.log("Form submitted")
    }

  constructor() { }

   roles:String[];
  ngOnInit() {
    this.roles = ['Developer', 'Data Scientist'];
    this.userForm = new FormGroup({
                emailid: new FormControl("abc@xyz.com"),
                fullname: new FormControl("Kaushal Kishor"),
                passwd: new FormControl("1234567"),
                number: new FormControl("98765432"),
                roles: new FormControl("abc@xyz.com"),
                path: new FormControl("C:/fakepath")

    });
    }
  
}

export interface userDetails {
    name: String,
    designation: String,
    email: String,
    address: String,
    contact: String,
    filelocation: String
}
