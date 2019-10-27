import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  url: string = "https://nodejsapidemo.herokuapp.com/users/";

  constructor( private http:HttpClient) { }

  getAllUsers(){
    return this.http.get(this.url);
  }
  getUserById(user_email){
    return this.http.get(this.url + user_email);
  }
  insertData(newuser){
    let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(newuser);
    return this.http.post(this.url,body,{headers:head});

  }
  eraseData(user_email){
    let head=new HttpHeaders().set("Content-Type","application/json");
    return this.http.delete(this.url+user_email,{headers:head});

  }
  updateData(newuser){
    let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(newuser);
    return this.http.put(this.url+newuser.user_email,body,{headers:head});

  }
}
