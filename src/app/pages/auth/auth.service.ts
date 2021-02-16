import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  Usuario } from '@app/shared/models/user.interface';
import { environment } from '@env/environment';
import { Observable, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  });

  Url = 'http://ec2-18-191-138-19.us-east-2.compute.amazonaws.com:8080/api/fondos-reto-service/';

  login(user:string, password:string) {
    return this.http.get(this.Url+`findByUserAndPass/`+ user + `/` + password ).pipe(map(data => data));;
    //return this.http.get(`${environment.API_URL}findByUserAndPass/`+ user + `/` + password ).pipe(map(data => data));;
  }
  setUser(user: Usuario): void {
    let user_string = JSON.stringify(user);
    localStorage.setItem("currentUser", user_string);
  }

  logout():void{}


}
