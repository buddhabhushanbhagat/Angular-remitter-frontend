import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemitterServiceService } from '../remitter-service.service';

@Component({
  selector: 'app-remitter-registration',
  templateUrl: './remitter-registration.component.html',
  styleUrls: ['./remitter-registration.component.css']
})
export class RemitterRegistrationComponent implements OnInit{

  private Service: RemitterServiceService;
  responses: any;

  constructor(Service1: RemitterServiceService, private router: Router) {
    this.Service = Service1;
  }

  ngOnInit(): void {
    
  }

remitterForm = new FormGroup({
    name:new FormControl("", [Validators.required]),
    accountNumber:new FormControl("", [Validators.required,Validators.pattern("^[0-9]*$")]),
    accountBalance:new FormControl("", [Validators.required,Validators.pattern("^[0-9]*$")]),
    address:new FormControl("", [Validators.required]),
    email:new FormControl("", [Validators.required,Validators.email]),
    password:new FormControl("", [Validators.required]),
    accountStatus:new FormControl("", [Validators.required])
  })
  

  remitrerCall(){
    console.log(this.remitterForm.value);
   
    this.Service.remitterRegistration(this.remitterForm.value).subscribe(res => {
      this.responses = res;
      alert("Remitter registration registerd successfull")
      console.log(res)
      this.router.navigate(["/home"]);
    },
      error => {
        console.log(error)
        alert("registration faild..")
      }
    );
  }

}

