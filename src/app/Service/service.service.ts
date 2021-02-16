import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseListColor } from '../Modelo/ListaColorRes';
import { ResponseColor } from '../Modelo/ResponseColor';
import { environment } from '@env/environment';
import { Color } from '../Modelo/Color';
import { ResponseColorPorId } from '../Modelo/ResponseColorPorId';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  Url = 'http://ec2-18-191-138-19.us-east-2.compute.amazonaws.com:8080/api/fondos-reto-service/';

  getColores(){
    return this.http.get<ResponseListColor>(this.Url.concat("listarPresentacion"));
    //return this.http.get<ResponseListColor>(`${environment.API_URL}listarPresentacion`);
  }

  getListarColor(){
    return this.http.get<ResponseColor>(this.Url.concat("listarColor"));
    //return this.http.get<ResponseColor>(`${environment.API_URL}listarColor`);
  }

  getColorId(id:number){
    return this.http.get<ResponseColorPorId>(this.Url+"listarColorId"+"/"+id);
    //return this.http.get<ResponseColorPorId>(`${environment.API_URL}listarColorId`+`/`+id);
  }

  updateColor(color:Color){
    return this.http.put<Color>(this.Url+"editarColor"+"/"+color.id, color);
   // return this.http.put<Color>(`${environment.API_URL}editarColor`+`/`+color.id, color);
  }

  deleteColor(color:Color){
    return this.http.delete<Color>(this.Url+`eliminarColor`+`/`+color.id);
    //return this.http.delete<Color>(`${environment.API_URL}eliminarColor`+`/`+color.id);
  }

  createColor(color:Color){
    return this.http.post<Color>(this.Url+`agregarColor`, color);
    //return this.http.post<Color>(`${environment.API_URL}agregarColor`, color);
   }

}
