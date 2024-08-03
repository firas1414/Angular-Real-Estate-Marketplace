import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor( private router : Router , private service :ApiService){

  }
  ngOnInit(): void {
   this.profile_houses();
   this.getrequest();
  }
  req:any;
  list_houses:any;
  test=this.service.getinfo();
  logout() {
    this.service.logout(this.service.getinfo());
    this.router.navigate(['/signin']);
  }
  

  gohome(){
    this.router.navigate(['/home']);
  }
  profile_houses(){
    this.service.profile_houses().subscribe(res=>{
      this.list_houses=res
      
    })
  }
  getrequest(){
    this.service.getrequest().subscribe(res=>{
      this.req=res
      this.req=this.req.data
      console.log(this.req)
    })
  }
  delete(x:any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: ' rgb(220, 156, 18)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.service.delete(x).subscribe(res=>{
          console.log(res)
          this.profile_houses();
        })
        this.profile_houses();
      }
    })
    
  }
  update(i :any){
 
    this.service.house=i;
    console.log(i)
    this.router.navigate(['/updatehouse']);
  }
  contact(c:any){
    
    Swal.fire({
      title: c ,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
  }
}
