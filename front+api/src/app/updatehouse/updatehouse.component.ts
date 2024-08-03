import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatehouse',
  templateUrl: './updatehouse.component.html',
  styleUrls: ['./updatehouse.component.css']
})
export class UpdatehouseComponent implements OnInit {

  constructor( private router : Router , private service :ApiService){

  }

  ngOnInit(): void {
  
  }
  pic=this.service.gethouse().pic1;
  title=this.service.gethouse().Title;
  price=this.service.gethouse().price;
  selectedOption=this.service.gethouse().type;
  gohome(){
    this.router.navigate(['/home']);
  }
  logout() {
    this.service.logout(this.service.getinfo());
    this.router.navigate(['/signin']);
  }
  test=this.service.getinfo();
  update(){
  this.service.update(this.service.gethouse().id,this.title,this.selectedOption,this.price).subscribe(res=>{
  
    console.log(res)
    this.router.navigate(['/profile'])
    Swal.fire({
      
      icon: 'success',
      color: 'rgb(220, 156, 18)',
      title: 'Your House Informations has been updated',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        icon: 'yellow-icon'
      }
    }
    )
  })
  }


}
