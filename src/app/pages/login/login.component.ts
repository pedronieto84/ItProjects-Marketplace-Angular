import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'

import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
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
  currentUser: User;

  constructor(  private formbuider: FormBuilder,
                public loginService: LoginService, 
                private router: Router) { }
                
  /* Método para el login del usuario*/
 async login() {  

    if(this.loginForm.invalid) {      
      return;
    }
    const loginUser = this.loginForm.value;
    this.isLoading = false;

      try{
        
        const res = await this.loginService.onLogin(loginUser)
        this.currentUser = res;
        this.loginService.updateUser(res);

        // Guardo el objeto como un string en el navegador
        localStorage.setItem('usuario', JSON.stringify(res));
        
        this.router.navigate(['/el-meu-compte']);
        this.isLoading = false
        
        
      }catch(err){
        this.messageError = err.error.error;
        this.isLoading = true
      }
       
      

    

      

     
  }

  

  getUser() {
    
    if(this.currentUser) {
      return this.currentUser
    } else {
      this.currentUser = JSON.parse(localStorage.getItem('usuario')) as User;
      return this.currentUser;
    }
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
