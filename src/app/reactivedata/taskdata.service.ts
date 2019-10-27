import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TaskdataService {
  url:string="https://nodejsapidemo.herokuapp.com/tasks/";

  constructor(private http:HttpClient) { }

  getAllData(){
    return this.http.get(this.url);
  }
  getDataById(Id){
    return this.http.get(this.url+Id);
  }
  addData(newuser){
    let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(newuser);
    return this.http.post(this.url,body,{headers:head});
  }
  removeData(Id){
    let head=new HttpHeaders().set("Content-Type","application/json");
    return this.http.delete(this.url+Id,{headers:head});

  }
  editData(newuser){
    let head=new HttpHeaders().set("Content-Type","application/json");
    let body=JSON.stringify(newuser);
    return this.http.put(this.url+newuser.Id,body,{headers:head});
  }
}
