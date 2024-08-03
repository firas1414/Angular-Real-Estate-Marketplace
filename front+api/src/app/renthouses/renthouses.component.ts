import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-renthouses',
  templateUrl: './renthouses.component.html',
  styleUrls: ['./renthouses.component.css']
})
export class RenthousesComponent implements OnInit {
 

  constructor(private router: Router, private service: ApiService ) {

  }
  ngOnInit(): void {
    
    this.load()
   
   }
  

  gologin() {
    this.router.navigate(['/signin']);
  }

  gosignup() {
    this.router.navigate(['/signup']);
  }
  load(){
    this.service.houseforrent().subscribe(res=>{
      this.service.list_houseforrent = res;
      this.list =res 
      
    })
   };
  logout() {
    this.service.logout(this.service.getinfo());
    this.router.navigate(['/signin']);
  }
  test=this.service.getinfo();
  list = this.service.getlist1();

 
  gotodetails(x:any){
    this.service.id_houseforsell=x.id
    this.router.navigate(['/rentresquest']);
    this.service.id_houseforsell=x.id
  }
  goprofile(){
    this.router.navigate(["/profile"])
  }
 
}

