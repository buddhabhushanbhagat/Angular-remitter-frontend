import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RemitterServiceService } from '../remitter-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginUser = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })
  private Service: RemitterServiceService;
  responses: any;
  customerId:any;
  constructor(Service1: RemitterServiceService, private router: Router) {
    this.Service = Service1;
  }

  ngOnInit(): void {
    // this.login();
  }

  login() {
    this.Service.login(this.loginUser.value).subscribe(res => {
      this.responses = res;
      this.Service.setLogeedInuser(res);
      this.Service.setCustomerId(this.responses.remitter.customerId);
      this.Service.setAccountNumber(this.responses.account.accountNumber);
      alert("login successfull")
      // this.customerId = this.responses.remitter.customerId;
      // this.customerId = this.responses.remitter.customerId;
      
      this.router.navigate(["/home"]); 
    },
      error => {
        console.log(error)
        alert("login faild..")

      }
    );
  }
  

}
