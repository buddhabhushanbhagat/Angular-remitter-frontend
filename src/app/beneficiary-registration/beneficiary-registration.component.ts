import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RemitterServiceService } from '../remitter-service.service';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-beneficiary-registration',
  templateUrl: './beneficiary-registration.component.html',
  styleUrls: ['./beneficiary-registration.component.css']
})
export class BeneficiaryRegistrationComponent implements OnInit {

  private Service: RemitterServiceService;
  responses: any;
  remitterId:any;
  beneficiaryUnderRemitter:any=[];
  beneficiaryData:any;

  constructor(Service1: RemitterServiceService, private router: Router) {
    this.Service = Service1;
  }

  ngOnInit(): void {
    this.remitterId = this.Service.getCustomerId();
    console.log("Logeedin Remitter Id"+this.remitterId)
    this.Service.beneficiaryListByRemitterId(this.remitterId).subscribe(list=>{
      this.beneficiaryUnderRemitter = list; 
    },err=>{console.log("empty list got")})
  }

  beneficiaryForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    accountNumber: new FormControl("", [Validators.required,Validators.pattern("^[0-9]*$")]),
    maxTsfrLimit: new FormControl("", [Validators.required,Validators.pattern("^[0-9]*$")]),
    ifscCode: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required,Validators.email]),
    address: new FormControl("", [Validators.required]),
    accountStatus: new FormControl("", [Validators.required]),
    customerId:new FormControl("")
  })

  dropDownForm = new FormGroup({
    accountNumber:new FormControl("",Validators.required)
  })
  
  onDropDown(){
    this.beneficiaryForm.controls.customerId.setValue(this.remitterId)
    this.Service.beneficiaryByAccountNumber(this.dropDownForm.value.accountNumber).subscribe(res=>{
      this.beneficiaryData = res;
      this.beneficiaryForm.controls.name.setValue(this.beneficiaryData.name);
      this.beneficiaryForm.controls.accountNumber.setValue(this.beneficiaryData.accountNumber);
      this.beneficiaryForm.controls.maxTsfrLimit.setValue(this.beneficiaryData.maxTsfrLimit);
      this.beneficiaryForm.controls.ifscCode.setValue(this.beneficiaryData.ifscCode);
      this.beneficiaryForm.controls.email.setValue(this.beneficiaryData.email);
      this.beneficiaryForm.controls.address.setValue(this.beneficiaryData.address);
      this.beneficiaryForm.controls.accountStatus.setValue(this.beneficiaryData.accountStatus);


      // this.beneficiaryForm.controls.customerId.setValue(this.beneficiaryData.customerId);

      console.log(this.beneficiaryData);
      console.log(this.beneficiaryForm.value);
    })
  }

  beneficiary() {
    //setting  remitterId in formcontrol for beneficiary under remitter
     this.beneficiaryForm.controls.customerId.setValue(this.remitterId)
    // this.beneficiaryForm.addControl('customerId', new FormControl(this.Service.getCustomerId()));
    this.Service.beneficiaryRegistration(this.beneficiaryForm.value).subscribe(res => {
      this.responses = res;
      console.log(res);
      alert("Beneficiary Registration successfull");
      this.router.navigate(["/home"]);
    },
      error => {
        console.log(error)
        alert("Registration faild......")
        
      }
    );
  }
  updateBeneficiary() {
    console.log(this.beneficiaryForm.value);
 
    this.beneficiaryForm.controls.customerId.setValue(this.remitterId)
    //  this.beneficiaryForm.addControl('customerId', new FormControl(this.Service.getCustomerId()));
      this.Service.beneficiaryUpdateByAccountNumber(this.dropDownForm.value.accountNumber,this.beneficiaryForm.value).subscribe(res => {
        this.responses = res;
        console.log(res);
        alert("Beneficiary Updated successfull");
        this.router.navigate(["/home"]);
      },
        error => {
          console.log(error)
          alert("Beneficiary Update faild......")
          
        }
      ); 
  }
  deleteBeneficiary() {
    //  this.beneficiaryForm.addControl('customerId', new FormControl(this.Service.getCustomerId()));
      this.Service.beneficiaryDeleteByAccountNumber(this.dropDownForm.value.accountNumber).subscribe(res => {
        console.log(res);
        alert("Beneficiary Deleted successfull");
        this.router.navigate(["/home"]);
      },
        error => {
          console.log(error)
          alert("Beneficiary Delete faild......")
          
        }
      ); 
  }


}
