import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accetoken = ""
  massage :File;
  constructor(private http: HttpClient) { }

  register(body:any){
    return this.http.post(`${environment.api}/registrar`, body)
  }

  enviaremail(body:any){
    return this.http.post(`${environment.api}/criarsolitacao`, body)
  }

  login(body:any){
    return this.http.post(`${environment.api}/Login`, body, {withCredentials:true})
  }

  user(){
    return this.http.get(`${environment.api}/user`)
  }

  refresh(){
    return this.http.post(`${environment.api}/refresh`, {}, {withCredentials:true}); 
  }

  produto(body:any){
    return this.http.post(`${environment.api}/produtos`, body)
  }

  produtopegar(){
    return this.http.get(`${environment.api}/pegarprodutos`)
  }

  getmessage(){
    return this.massage
  }

  setmessage(messgae:File){
    this.massage = messgae
  }
  
}
