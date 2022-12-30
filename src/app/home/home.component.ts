import { Component, OnInit } from '@angular/core';
import { RemitterServiceService } from '../remitter-service.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  private Service: RemitterServiceService;
  remitterDetails:any;
  constructor(Service1: RemitterServiceService) {
    this.Service = Service1;
  }
  ngOnInit(): void {
    // this.login();
    
    // this.remitterDetails = this.Service.getSharedUser();
    this.Service.getRemittersDetailsById(this.Service.getAccountNumber()).subscribe(res=>{
      this.remitterDetails = res;
      console.log(this.remitterDetails)
    },err=>{
      console.log("error in getting remitter details with account number "+this.Service.getAccountNumber())
    })

   console.log(this.remitterDetails) 
  }
  
}
