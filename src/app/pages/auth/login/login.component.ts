import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: any = {};
  form: FormGroup = new FormGroup({
  });
  
  constructor(
    private authSvc:AuthService,
    private router: Router,
    private login: FormBuilder
    ) {
      this.form = login.group({
        username: ['', [Validators.required]],
        pass: ['', [Validators.required]]
      }, )
    }
   
  ngOnInit() {
    
  }
  ngOnDestroy():void{

  }

  save(event: Event) {
    event.preventDefault();
      return this.authSvc
        .login(this.form.get('username')?.value, this.form.get('pass')?.value)
        .subscribe(
        data => {
          const dataValue = JSON.stringify(data);
          const valueFromJson = JSON.parse(dataValue);
          const resultado = ((valueFromJson || {}).resultado|| {}).codigo;
          if(resultado == 0){
            localStorage.setItem("rol", ((valueFromJson || {}).datos|| {}).rol.nombre  );
            console.log(JSON.stringify( ((valueFromJson || {}).datos|| {}).rol.nombre  ));
            this.router.navigate(['/home']);
          }else{
            this.router.navigate(['/login']);
          }

        },

        );

  }

}
