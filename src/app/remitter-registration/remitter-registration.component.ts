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
  remitterDetails:any=[];
  remitterData:any;
  constructor(Service1: RemitterServiceService, private router: Router) {
    this.Service = Service1;
  }

  ngOnInit(): void {
    this.Service.getAllRemittersDetaild().subscribe(list=>{
      console.log(list);
      this.remitterDetails = list;
    },err=>{
      console.log(err);
    })
  }

remitterForm = new FormGroup({
    name:new FormControl("", [Validators.required]),
    accountNumber:new FormControl("", [Validators.required,Validators.pattern("^[0-9]*$")]),
    accountBalance:new FormControl("", [Validators.required,Validators.pattern("^[0-9]*$")]),
    address:new FormControl("", [Validators.required]),
    email:new FormControl("", [Validators.required,Validators.email]),
    password:new FormControl("", [Validators.required]),
    contactNo:new FormControl("", [Validators.required,Validators.pattern("^\\d{10}$")]),
    accountStatus:new FormControl("", [Validators.required])
  })

  dropDownForm = new FormGroup({
    accountNumber:new FormControl("",Validators.required)
  })
  
  onDropDown() {
    this.Service.getRemitterByAccountNumber(this.dropDownForm.value.accountNumber).subscribe(res=>{
      this.remitterData = res;
      this.remitterForm.controls.name.setValue(this.remitterData.remitter.name);
      this.remitterForm.controls.address.setValue(this.remitterData.remitter.address);
      this.remitterForm.controls.email.setValue(this.remitterData.remitter.email);
      this.remitterForm.controls.password.setValue(this.remitterData.remitter.password);
      this.remitterForm.controls.contactNo.setValue(this.remitterData.remitter.contactNo);
      this.remitterForm.controls.accountNumber.setValue(this.remitterData.accountNumber);
      this.remitterForm.controls.accountBalance.setValue(this.remitterData.accountBalance);
      this.remitterForm.controls.accountStatus.setValue(this.remitterData.accountStatus);
    },err=>{
      console.log(err);
    })
  }

  updateRemitter() {
    console.log(this.remitterForm.value)
    //  this.remitterForm.addControl('customerId', new FormControl(this.remitterData.remitter.customerId));
    this.Service.remitterUpdate(this.remitterForm.value,this.remitterData.remitter.customerId).subscribe(res=>{
      console.log(res);
      alert("Updated Succesfully")
      this.router.navigate(["/home"]);
    },err=>{
  console.log(err)
  alert("Update Failed!")

    })
  }

  deleteRemitter() {
  console.log(this.dropDownForm.value.accountNumber)
    //  this.remitterForm.addControl('customerId', new FormControl(this.remitterData.remitter.customerId));
    this.Service.remitterDeleteByAccountNumber(this.dropDownForm.value.accountNumber).subscribe(res=>{
      console.log("delete remitter result:"+res);
      alert("Remitter Deleted Succesfully")
      this.router.navigate(["/home"]);

    },err=>{
  console.log(err)
  alert("Remitter delete failed")
    })
  }

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
        alert("registration faild! \n"+error.error)
      }
    );
  }

}

