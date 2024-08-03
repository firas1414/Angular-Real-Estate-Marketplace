import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


constructor( private router : Router , private service : ApiService){

}
test=this.service.getinfo();

gologin(){
  this.router.navigate(["/signin"])
}
gosignup(){
  this.router.navigate(["/signup"])
}

gosell(){
  this.router.navigate(["/sell"])
}
gorent(){
  this.router.navigate(["/renthouse"])
}
gohome(){
  this.router.navigate(["/home"])
}
logout(){
  this.service.logout(this.service.getinfo());
  console.log(this.service.id);
  this.router.navigate(['/signin']);

}
gethouses(){
  this.router.navigate(["/buyhouse"]);
}
goprofile(){
  this.router.navigate(["/profile"])
}
}
