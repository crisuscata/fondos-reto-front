import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../../Service/service.service';
import { ResponseColor } from '../../../Modelo/ResponseColor';
import { Color } from '../../../Modelo/Color';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  colores:ResponseColor;
  rolUsuario: string;
  isAdmin:boolean;

  constructor(private service:ServiceService, private router:Router) {
    this.rolUsuario = localStorage.getItem("rol");
    console.log(JSON.stringify(  this.rolUsuario  ));

    if(this.rolUsuario = 'Administrador'){
      this.isAdmin = true;
    } else{
      this.isAdmin = false;
    }

   }



  ngOnInit(): void {

    this.service.getListarColor()
    .subscribe(data=>{
      this.colores=data;
    }); 



  }

  Editar(color:Color){
    localStorage.setItem("idColor", color.id.toString());
    this.router.navigate(["edit"]);
  }

  Delete(color:Color){
    this.service.deleteColor(color)
    .subscribe(data=>{
      this.colores.datos=this.colores.datos.filter(p=>p!==color);
      alert("Color eliminado...");
    })
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }


}
