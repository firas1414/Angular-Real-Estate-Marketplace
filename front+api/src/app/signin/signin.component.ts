import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit{
   f_name="";
   email="";
   password="";
   phone="";
   cin="";
   result :any
   error="";
   

  gologin(){
    this.router.navigate(["/signin"])
  }
  gosignup(){
    this.router.navigate(["/signup"])
  }
  ngOnInit(): void {
    
  }
  constructor( private router : Router , private service :ApiService){
    
  }
  register() {

    if (!(this.f_name && this.email && this.password && this.phone && this.cin)) {
      this.error="Complete All fields"
    }else{
      this.service.register(this.f_name, this.email, this.password, this.phone, this.cin).subscribe(res => {
        this.result = res
        
        if(this.result.message == "failed"){
            this.error="This email already exist";
        }
        else{
          this.router.navigate(['/signin'])
          Swal.fire({
            
            icon: 'success',
            color: 'rgb(220, 156, 18)',
            title: 'User Created',
            showConfirmButton: false,
            timer: 2000,
            customClass: {
              icon: 'yellow-icon'
            }
          }
          )
        }
       
       });
     } 
    }
     
  
  
  
  
   

}
