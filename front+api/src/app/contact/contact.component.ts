import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

 
  constructor( private router : Router , private service :ApiService){

  }
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
  goprofile(){
    this.router.navigate(["/profile"])
  }
}
