import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemitterServiceService } from '../remitter-service.service';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent implements OnInit {
  // private Service: FundTransferService;
  private remitterService:RemitterServiceService;
  remitterId:any;
  remAccNumber:any;
  beneficiaryUnderRemitter:any=[];
  transactionDetails:any;



  constructor( remitterService:RemitterServiceService, private router: Router) {
    // this.Service = Service1;
    this.remitterService = remitterService;
  }

  ngOnInit(): void {
    this.remitterId = this.remitterService.getCustomerId();
    this.remAccNumber = this.remitterService.getAccountNumber();
    console.log("rem acc no"+this.remAccNumber)
    // this.remitterAccountNumber = this.remitterService.getAccountNumber();
    // console.log("remitter acc no:"+this.remitterAccountNumber)

    this.remitterService.beneficiaryListByRemitterId(this.remitterId).subscribe(list=>{
      this.beneficiaryUnderRemitter = list; 
    },err=>{console.log("empty list got")})

  }

  fundTransferForm = new FormGroup({
    remitterAccountNumber: new FormControl(""),
    accountNumber: new FormControl("", [Validators.required]),
    amounTransfered:new FormControl("",[Validators.required]),
    narration:new FormControl("",[Validators.required])
  })

  onTransfer = ()=>{
     this.fundTransferForm.controls.remitterAccountNumber.setValue(this.remAccNumber);
    console.log(this.fundTransferForm)
    this.remitterService.fundTransferToBeneficiary(this.fundTransferForm.value).subscribe(res => {
      console.log(res)
      this.transactionDetails = res;
      
      alert("Transaction happned succesfully")
      this.router.navigate(["/home"]);
    },err=>{
      console.log(err)
      alert("Transaction failed!!!"+err.error.message)
    })
  }

}
