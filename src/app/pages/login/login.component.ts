import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  //declaramos variables
  loginForm: FormGroup;
  isLoading = false;
  messageError: string = null;


  constructor(  private formbuider: FormBuilder,
                public loginService: LoginService, 
                private router: Router) { }
                
  /* Método para el login del usuari*/
  onLogin() {
    if(this.loginForm.invalid) {
      return;
    }
    const loginUser = this.loginForm.value;
      this.isLoading = false;
      this.loginService.onLogin(loginUser)
      .then(res => {
        // Guardo el objeto como un string en el navegador
        localStorage.setItem('usuario', JSON.stringify(res));

        /*Faltan definir las rutas*/
        this.router.navigate(['/admin']);
      }).catch(err => {this.messageError = err.error.error;});
      this.isLoading = true;
  }

 
  ngOnInit() {
    //Iniciamos las variables del formulario
    this.loginForm = this.formbuider.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [ Validators.required,
                                        Validators.minLength(6),                                
                                        Validators.maxLength(10),
                                        Validators.pattern(
                                          /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/)])
    });
  }
}
