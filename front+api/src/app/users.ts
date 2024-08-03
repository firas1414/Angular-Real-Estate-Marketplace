export class Users {

 public id:number;
 public f_name:String;
 public email:String;
 public password:String;
  public phone:String;
 constructor(id:number,f_name:String,email:String,password:String,phone:String){
    
     this.id=id;
     this.f_name=f_name;
     this.email=email;
     this.password=password;
     this.phone=phone;

 }

}