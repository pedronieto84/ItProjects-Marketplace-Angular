import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

import { loginUser } from '../../interfaces/interfaces'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

  //declaramos variables
  loginForm: FormGroup;
  isLoading = true;
  messageError: string = null;

  constructor(  private formbuider: FormBuilder,
                public loginService: LoginService, 
                private router: Router) { }

  async onLogin() {

    if(this.loginForm.invalid) {
      return;
    }
    const loginUser = this.loginForm.value;
    try {

      await this.loginService.onLogin(loginUser);

      this.isLoading = true;
      
    } catch (error) {
      console.log(error);
    }
    
  }

 
  ngOnInit() {
    //Iniciamos las variables del formulario
    this.loginForm = this.formbuider.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [ Validators.required,
                                        Validators.minLength(6),                                
                                        Validators.maxLength(10)
                                        ])
    });
  }
}


