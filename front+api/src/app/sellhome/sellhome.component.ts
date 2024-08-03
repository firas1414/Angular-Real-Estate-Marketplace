import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sellhome',
  templateUrl: './sellhome.component.html',
  styleUrls: ['./sellhome.component.css']
})
export class SellhomeComponent {

  constructor( private router : Router , private service :ApiService){

  }
  error="";
  test=this.service.getinfo();
  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
  gosell(){
    if(this.test==0){

       Swal.fire({
  icon: 'error',
  title: 'You Should Login',
  text: 'Something went wrong!',
  
    
  })
  this.router.navigate(["/signin"])

    }else{
      this.router.navigate(["/upload"])
    }
   
  }
  logout(){
    this.service.logout(this.service.getinfo());
    
    this.router.navigate(['/signin']);
  }
  goprofile(){
    this.router.navigate(["/profile"])
  }

}
