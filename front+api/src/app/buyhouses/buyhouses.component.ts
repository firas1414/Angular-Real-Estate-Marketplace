import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-buyhouses',
  templateUrl: './buyhouses.component.html',
  styleUrls: ['./buyhouses.component.css']
})
export class BuyhousesComponent implements OnInit {
 

  constructor(private router: Router, private service: ApiService ) {

  }

  

  gologin() {
    this.router.navigate(['/signin']);
  }

  gosignup() {
    this.router.navigate(['/signup']);
  }
  load(){
    this.service.houseforsell().subscribe(res=>{
      this.service.list_houseforsell = res;
      this.list =res 
      console.log(this.list)
     
    })
   };
  logout() {
    this.service.logout(this.service.getinfo());
    this.router.navigate(['/signin']);
  }
  test=this.service.getinfo();
  list = this.service.getlist();

  ngOnInit(): void {
   this.load()
    
  }
  gotodetails(x:any){
    this.service.id_houseforsell=x.id
    this.router.navigate(['/buyresquest']);
   
  }
 
  goprofile(){
    this.router.navigate(["/profile"])
  }
  
}
