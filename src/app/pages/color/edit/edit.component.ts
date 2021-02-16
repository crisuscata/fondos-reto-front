import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../../Service/service.service';
import { Color } from '../../../Modelo/Color';
import { ResponseColorPorId } from '../../../Modelo/ResponseColorPorId';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  color:Color=new Color();

  constructor(private router:Router, private service:ServiceService)  {  }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){

    let idColor=localStorage.getItem("idColor");
    this.service.getColorId(+idColor)
    .subscribe(data=>{

      this.color = data.datos;
      //console.log(JSON.stringify(this.color));
    })

  }

  Actualizar(color:Color){
    this.service.updateColor(color)
    .subscribe(data=>{
      console.log(JSON.stringify(data));
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["crud"]);
    })
  }



}
