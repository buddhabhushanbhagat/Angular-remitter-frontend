import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemitterServiceService } from '../remitter-service.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit{

private service: RemitterServiceService;
totalTransactionlength:any;
transactionDetails:any=[];
transactionId:any=[];
p: any = 1;
count: any = 5;
  constructor(service: RemitterServiceService, private router: Router) {
   this.service = service;
  }

  ngOnInit(): void {
    
  }
  reportForm = new FormGroup({
    startDate:new FormControl("", [Validators.required]),
    endDate:new FormControl("", [Validators.required])

  })

  report(){
console.log(this.reportForm.value)
this.service.getTransactionBetweenDates(this.reportForm.value.startDate,this.reportForm.value.endDate).subscribe(res=>{
  this.transactionDetails=res;
  for (const iterator of this.transactionDetails) {
    this.transactionId =iterator.transactionId;
  }
  this.totalTransactionlength = this.transactionDetails.length;
  console.log(this.totalTransactionlength)
  console.log(this.transactionDetails)
  console.log(this.transactionId)
},err=>{
  console.log(err)
  this.transactionDetails=[];
})
  }



  download() {
    window.print();
    }
}
