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
                emailid: new FormControl(''),
                fullname: new FormControl(''),
                passwd: new FormControl(''),
                number: new FormControl(''),
                roles: new FormControl(''),
                path: new FormControl('')

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
