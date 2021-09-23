import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'


@Injectable()
export class AuthService {
   userInfo:BehaviorSubject<any>=new BehaviorSubject<any>(null);
   jwtHelpler=new JwtHelperService();
  constructor(private http:HttpClient) {
    this.loadInfo();
  }
  loadInfo(){
    const userData=this.userInfo.getValue();
    if(!userData){
    const accesstoken=localStorage.getItem("access_token");
    if(accesstoken){
      const descrytpted=this.jwtHelpler.decodeToken(accesstoken);
    const data={
      access_token:accesstoken,
      refresh_token:localStorage.getItem("refresh_token"),
      username:descrytpted.username,
      userid:descrytpted.sub,
      tokenExpiration:descrytpted.expiryDate
    };
    this.userInfo.next(data);
  }
   }
  }
  userLogin(userPayload:any):Observable<boolean>{

      return this.http.post("http://localhost:8080/authenticate",userPayload,{responseType:'text' as 'json'})
      .pipe(
        map(value=>{
            console.log(value.toString())
            if(value){
            localStorage.setItem("access_token", value.toString());
            const descrytpted = this.jwtHelpler.decodeToken(value.toString());
            const data = {
              access_token: value.toString(),
              username: descrytpted.username,
              userid: descrytpted.sub,
              tokenExpiration: descrytpted.expiryDate
            };
            this.userInfo.next(data);
            return true;
          }
          return false;
        }));
    
    
    
  }
 
}
