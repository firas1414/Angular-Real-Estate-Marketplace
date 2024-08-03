import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-buyrequest',
  templateUrl: './buyrequest.component.html',
  styleUrls: ['./buyrequest.component.css']
})
export class BuyrequestComponent implements OnInit {

  constructor( private router : Router , private service :ApiService){

  }

  message=""
  
  obj:any;
  error="";
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
  
  getdetails(){
    this.service.getdetails(this.service.id_houseforsell).subscribe(res=>{
      this.obj = res;

    })
  }
  
   name=this.service.logged.f_name;
   emailu=this.service.logged.email;
   phone=this.service.logged.phone;
   msg="";
   pr=0;
   
   goprofile(){
    this.router.navigate(["/profile"])
  }
  
  send(){
    if(this.test==0){
      Swal.fire({
        icon: 'error',
        title: 'You Should Login',
        text: 'Something went wrong!',
        
          
      })
      this.router.navigate(["/signin"])
    }else{
      
      
      this.message ="House: "+this.obj[0].Title+ "  \nMy contact: "  + this.phone +"  Sugg price: "+this.pr.toString() +"DT  Messsage: "+this.msg;
      console.log(this.message)
      this.service.request(this.obj[0].id_user,this.message).subscribe(res=>{
        console.log(res)
      })
      Swal.fire({
        icon: 'success',
        title: 'Request Sended',
        text: 'The Owner Will Contact You !',
        
          
      })
      this.router.navigate(["/buyhouse"])
      
    }
    
  }
  ngOnInit(): void {
    this.getdetails();
   
   }
}
