import { Component, OnInit } from '@angular/core';
import { Color } from '../../../Modelo/Color';
import { Router } from '@angular/router';
import { ServiceService } from '../../../Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  color:Color=new Color();

  constructor(private router:Router, private service:ServiceService)  {  }

  ngOnInit(): void {
  }

  Guardar(color:Color){
    this.service.createColor(color)
    .subscribe(data=>{
      alert("Agregado con exito!!");
      this.router.navigate(["crud"]);
    })
  }

}
