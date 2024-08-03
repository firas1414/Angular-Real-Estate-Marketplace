import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupForm: FormGroup;
  errorMessage: string = '';
  response: any;
  check:any;
  private message = 'success';
  connected=0;
  ngOnInit(): void {
    

    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  constructor(
    private router: Router,
    private http: HttpClient,
    @Inject(ApiService) public authService: ApiService,
    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  test=this.authService.getinfo();

  gologin() {
    this.router.navigate(['/signin']);
  }

  gosignup() {
    this.router.navigate(['/signup']);
  }

  login() {
    const email = this.signupForm.controls['email'].value;
    const password = this.signupForm.controls['password'].value;

   this.response = this.authService.login(email, password,this.authService.getinfo()).subscribe(res=>{
    this.check=res
    if(this.check.message == this.message){
      this.authService.id=this.check.data[0].id;
      this.authService.logged=this.check.data[0]
      this.router.navigate(['/home']);
      console.log(this.authService.id);
    }
    else{
      this.errorMessage="invalid email or password";
    }
  }
    )
   
  
  }
  logout(){
    this.authService.logout(this.authService.getinfo());
    console.log(this.authService.getinfo())
  }
 
}
