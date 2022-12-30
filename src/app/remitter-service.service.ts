import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RemitterServiceService {

  private http:HttpClient;

  customerId:any;
  accountNumber:any;
  logeedInUser:any;

  constructor(http1:HttpClient) {
    this.http=http1;
}

       login=(data:any)=>{
        return this.http.post("http://localhost:8001/remitter/login",data)
       }

       remitterRegistration = (data:any) =>{
        return this.http.post("http://127.0.0.1:8001/remitter/register",data)
       }

       getAllRemittersDetaild = ()=>{
        return this.http.get("http://localhost:8001/remitter")
       }  
       
       getRemittersDetailsById = (remitterId:any)=>{
        return this.http.get("http://localhost:8001/remitter/account/"+remitterId)
       }

       getRemitterByAccountNumber = (accountNumber:any)=>{
        return this.http.get("http://localhost:8001/remitter/account/"+accountNumber)
       }

       remitterUpdate = (data:any,remitterId:any) =>{
        return this.http.put("http://localhost:8001/remitter/"+remitterId,data)
       }

       remitterDeleteByAccountNumber =(accountNumber: any) => {
        return this.http.delete("http://127.0.0.1:8001/remitter/account/"+accountNumber);
      }

       beneficiaryRegistration=(data:any)=>{
        return this.http.post("http://127.0.0.1:8002/beneficiary",data)
       }

       beneficiaryByAccountNumber=(accountNumber:any)=>{
        return this.http.get("http://127.0.0.1:8002/beneficiary/accountnumber/"+accountNumber)
       }
       beneficiaryListByRemitterId=(customerId:any)=>{
        return this.http.get("http://127.0.0.1:8002/beneficiary/remitter/"+customerId)
       }
       beneficiaryUpdateByAccountNumber=(accountNumber:any,data:any)=>{
        return this.http.put("http://127.0.0.1:8002/beneficiary/"+accountNumber,data);
       }
       beneficiaryDeleteByAccountNumber =(accountNumber: any) => {
        return this.http.delete("http://127.0.0.1:8002/beneficiary/"+accountNumber);

      }
      fundTransferToBeneficiary =(data:any)=>{
        return this.http.post("http://127.0.0.1:8003/transaction",data);
      }

      getTransactionBetweenDates =(fromDate:any,toDate:any)=>{
        return this.http.get("http://127.0.0.1:8003/transaction?transactionStartDate="+fromDate+"&transactionEndDate="+toDate);
      }

   setCustomerId(val:any){
    this.customerId = val;
  }
 
   getCustomerId():Number{
    return this.customerId;
  }

  setAccountNumber(val:any){
    this.accountNumber = val;
  }
 
   getAccountNumber():Number{
    return this.accountNumber;
  }

   setLogeedInuser(val:any){
    this.logeedInUser = val;
  }
 
   getSharedUser():Number{
    return this.logeedInUser;
  }
           
}
