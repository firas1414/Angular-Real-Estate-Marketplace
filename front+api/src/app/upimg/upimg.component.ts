import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upimg',
  templateUrl: './upimg.component.html',
  styleUrls: ['./upimg.component.css']
})
export class UpimgComponent implements OnInit {

  selectedOption = "";
  id_user = "";
  title = "";
  surface = 0;
  nb_bedroom = 0;
  nb_bathroom = 0;
  type = "";
  price = 0;
  address = "";
  urlimg: any;
  imgFile: any;
  email = this.service.logged.email;
  phone = this.service.logged.phone;
  test = this.service.getinfo();

  constructor(private router: Router, private service: ApiService) { }

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.imgFile = event.target.files[0];
  }

  gologin() {
    this.router.navigate(["/signin"]);
  }

  gosignup() {
    this.router.navigate(["/signup"]);
  }

  logout() {
    this.service.logout(this.service.getinfo());
    this.router.navigate(['/signin']);
  }

  goprofile() {
    this.router.navigate(["/profile"]);
  }
  fileInputChange(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.urlimg = reader.result;
      console.log(this.urlimg);
    };
  }

  uploadProperty() {
    if (this.title !== "") {
      this.service.upload(this.title, this.surface, this.nb_bedroom, this.nb_bathroom, this.selectedOption, this.price, this.address, this.urlimg).subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/profile'])
    Swal.fire({
      
      icon: 'success',
      color: 'rgb(220, 156, 18)',
      title: 'Your House Informations has been Sended',
      showConfirmButton: false,
      timer: 2000,
      customClass: {
        icon: 'yellow-icon'
      }
    }
    )
        }

      );
    }else{
      Swal.fire({
        icon: 'error',
        title: 'You Have Complete All Fields',
        text: 'Something went wrong!',
        
          
      })

    }
  }

  
}
