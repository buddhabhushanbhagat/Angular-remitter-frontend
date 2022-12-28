export class Remitter {
    customerId:Number;
	name:String;
	email: String ;
	address: String ;
	password: String ;
	maxLimit: Number ;
	insertDate: Date ;
	updateDate: Date ;

    constructor(customerId:Number,name:String,email: String,address: String,password: String,maxLimit: Number,insertDate: Date,updateDate: Date){
        this.customerId=customerId;
        this.name=name;
        this.email=email;
        this.address=address;
        this.password=password;
        this.maxLimit=maxLimit;
        this.insertDate=insertDate;
        this.updateDate=updateDate;
    }
    
    set setCustomerId(val: Number){
        this.customerId = val;
      }
      set setName(val: string){
        this.name = val;
      }
      set setEmail(val: string){
        this.email = val;
      }
      set setAddress(val: string){
        this.address = val;
      }
      set setPassword(val: string){
        this.password = val;
      }
      set setMaxLimit(val: Number){
        this.maxLimit = val;
      }
      set setInsertDate(val: Date){
        this.insertDate = val;
      }
      set setUpdateDate(val: Date){
        this.updateDate = val;
      }
     
      get getCustomerId():Number{
        return this.customerId;
      }
      get getName():String{
        return this.name;
      }
      get getEmail():String{
        return this.email;
      }
      get getAddress():String{
        return this.address;
      }
      get getPassword():String{
        return this.password;
      }
      get getMaxLimit():Number{
        return this.maxLimit;
      }
      get getInsertDate():Date{
        return this.insertDate;
      }
      get getUpdateDate():Date{
        return this.updateDate;
      }

   
}
