import { Injectable , Output , EventEmitter } from "@angular/core";
import { map } from "rxjs/operators";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

import { Observable } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class ApiService {
    private readonly baseUrl:String = "http://localhost/estatefind_backend";
  x=0;
  id=0;
  list_houseforsell:any;
  list_houseforrent:any;
  id_houseforsell:any;
  id_houseforrent:any;
  logged:any
  house:any
     // key to store authentication token in localStorage

  
    constructor(private http: HttpClient) { }

    login(email:any, password:any,x:any)  : Observable<HttpResponse<ApiService>>{
      this.x=1;
      const body = JSON.stringify({ email: email, password: password });
      return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/login.php", body).pipe(map(data => data));
    }
    getdetails(x:any)  : Observable<HttpResponse<ApiService>>{
     
      const data = JSON.stringify({ id:x });
      return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/details.php", data).pipe(map(data => data));
    }
    
    logout(x:any) {
     this.x=0;
    }
    getinfo(){
      return this.x
    }
    gethouse(){
      return this.house ;
    }
    update(id: any , title:any,type:any, price:any){
      const info = JSON.stringify({ id : id, title:title,price:price,type:type });
      return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/update.php",info).pipe(map(data => data)); 
    }
    delete(i:any){
      const info = JSON.stringify({ id : i});
      return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/delete.php",info).pipe(map(data => data)); 
    }
    getrequest(){
      const info = JSON.stringify({ id: this.id});
      return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/getrequest.php",info).pipe(map(data => data)); 
    }
    profile_houses(){
      const info = JSON.stringify({ id: this.id});
      return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/profile_houeses.php",info).pipe(map(data => data)); 
    }
    houseforrent(){
      return this.http.get<HttpResponse<ApiService>>("http://localhost/estatefind_backend/houseforrent.php").pipe(map(data => data)); 
    }
    houseforsell(){
      
      return this.http.get<HttpResponse<ApiService>>("http://localhost/estatefind_backend/houseforsell.php").pipe(map(data => data)); 
    }
    register(name:any,email:any,pass:any,phone:any,cin:any){
      const info = JSON.stringify({ f_name : name, email: email, password: pass ,phone :phone ,cin:cin });
      return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/regiter.php",info).pipe(map(data => data));
    }
    upload(Title:any,surface:any,nb_bedroom:any,nb_bathroom:any,type:any ,price:any,address:any,pic:any){
   
      const info = JSON.stringify({ id_user :this.id, email: this.logged.email, Title: Title ,phone :this.logged.phone ,nb_bathroom:nb_bathroom,nb_bedroom:nb_bedroom,surface:surface,type:type,price:price,address:address,pic1:pic });
      return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/uploadhouse.php",info).pipe(map(data => data));    }
    request(id_user:any,message:String){
        const info = JSON.stringify({
          "id_user": id_user,
          "message": message
         
        }
        );
        return this.http.post<HttpResponse<ApiService>>("http://localhost/estatefind_backend/request.php",info).pipe(map(data => data));
      }
   getlist(){
    return this.list_houseforsell;
   }
   getlist1(){
    return this.list_houseforrent;
   }
}