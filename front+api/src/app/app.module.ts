import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RenthousesComponent } from './renthouses/renthouses.component';
import { BuyhousesComponent } from './buyhouses/buyhouses.component';
import { FilterComponent } from './filter/filter.component';
import { SellhomeComponent } from './sellhome/sellhome.component';


import { UpimgComponent } from './upimg/upimg.component';
import { RentrequestComponent } from './rentrequest/rentrequest.component';
import { BuyrequestComponent } from './buyrequest/buyrequest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {  MatFormFieldModule } from '@angular/material/form-field';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermeComponent } from './terme/terme.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {HttpClientModule} from '@angular/common/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdatehouseComponent } from './updatehouse/updatehouse.component';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
   
    SigninComponent,
        SignupComponent,
        RenthousesComponent,
        BuyhousesComponent,
        FilterComponent,
        SellhomeComponent,
       

        UpimgComponent,
        RentrequestComponent,
        BuyrequestComponent,
        PrivacyComponent,
        TermeComponent,
        AboutComponent,
        ContactComponent,
        NotfoundComponent,
        ProfileComponent,
        UpdatehouseComponent,
        
                
       
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
