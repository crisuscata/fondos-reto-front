import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../Service/service.service';
import { ResponseListColor } from '../../Modelo/ListaColorRes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  colores:ResponseListColor;
  divPage1: string;
  divOtherPage: string;
  rolUsuario: string;

  constructor(private service:ServiceService) { 
    this.divPage1 = "carousel-item py-5 active";
    this.divOtherPage = "carousel-item py-5";
    this.rolUsuario = localStorage.getItem("rol");
  }

  ngOnInit(): void {

    this.service.getColores()
      .subscribe(data=>{
        this.colores=data;
      }); 
      
  }

  

}
