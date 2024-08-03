import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';





@Component({
  selector: 'app-rentrequest',
  templateUrl: './rentrequest.component.html',
  styleUrls: ['./rentrequest.component.css']

})
export class RentrequestComponent {
  obj:any;
  constructor( private router : Router , private service :ApiService){

  }
  error="";
 
  message="";
  nbm="";
  msg="";
  test=this.service.getinfo();
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
  logout(){
    this.service.logout(this.service.getinfo());
    
    this.router.navigate(['/signin']);
  }
  email(){
    if(this.test==0){
        this.error="You Should Login"
        const at = document.getElementById("at");

     if (at) {
      // Manipulate the element or access its properties
        at.textContent = "Go Login";
}
    }else{
      //send email
    }
   
  }
  getdetails(){
    this.service.getdetails(this.service.id_houseforsell).subscribe(res=>{
      this.obj = res;
       
    })
  }
  ngOnInit(): void {
    this.getdetails()
   }
   name=this.service.logged.f_name;
   emailu=this.service.logged.email;
   phone=this.service.logged.phone;
   goprofile(){
    this.router.navigate(["/profile"])
  }
  send(){
    if(this.test==0){
        this.error="You Should Login"
        const at = document.getElementById("at");

      console.log(this.message)
    }else{
      //send email
      
      this.message ="House: "+this.obj[0].Title+ "  \n My contact: "  + this.phone +" Messsage: "+this.msg +"I want to rent your House For " + this.nbm +"months";
      console.log(this.message)
      this.service.request(this.obj[0].id_user,this.message).subscribe(res=>{
        console.log(res)
      })
      
    }
    
  }
}
