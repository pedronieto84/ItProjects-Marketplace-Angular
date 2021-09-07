import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //declaramos variables
  loginForm: FormGroup;
  submitted = false;
  messageError: string = null;

  constructor(  private formbuider: FormBuilder,
                public loginService: LoginService, 
                private router: Router) { }

  async onLogin() {
    this.submitted = true;

    if(this.loginForm.invalid) {
      return;
    }
    const { email, password } = this.loginForm.value;
    await this.loginService.onLogin(email);
  }

  ngOnInit() {
    //Iniciamos las variables del formulario
    this.loginForm = this.formbuider.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required)
    });
  }

}
