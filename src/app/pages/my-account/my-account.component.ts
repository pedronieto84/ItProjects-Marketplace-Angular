import { Component, OnInit } from '@angular/core';
//services
import { ApiService } from 'src/app/services/api.service';
//form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//interfaces
import { User } from '../../interfaces/interfaces'
import { __values } from 'tslib';
@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})
export class MyAccountComponent implements OnInit {
  
  projects = [];
  currentUser: any;
  currentUserTypeInstitution:string ="";


  //pestañas activas
  active = 1;

  // regex de register ??
  ///^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/

  //campos de formulario
  updateUserForm: FormGroup = this.fb.group({
    userName     : ['', [Validators.minLength(1)]],
    UserEmail     : ['', [Validators.email]], 
    userPassword     : ['', [
        Validators.minLength(5), 
        Validators.maxLength(10), 
        /*Validators.pattern('^[a-zA-Z0-9!@#$%^&*]$')*/
      ]]
  })

  constructor(private fb:FormBuilder, public ApiService: ApiService) { }

  //validación de formulario
  isValid( campo: string){ 
    return this.updateUserForm.controls[campo].errors && this.updateUserForm.controls[campo].touched;
  }

  ngOnInit() {  
    let datoObjeto = JSON.parse(localStorage.getItem('usuario')); 
    if(datoObjeto){
        // USUARIO datos
        this.ApiService.getUser(datoObjeto.userId).subscribe( 
          data => {
          this.currentUser = data;
          //cargamos en el form el tipo de institución
          this.pushInstitution(this.currentUser.typeOfInstitution);
        },    
        err => {
          console.log("Error");
        });    
        // PROYECTOS de un usuario
        this.ApiService.getProjects(datoObjeto.userId).subscribe( 
          (data: any[]) => {    
            this.projects = data;
        },
        err => {
            console.log("Error");
        });
    }else{
        console.log("Error");
    } 
  }

  editUser() {
    if(this.updateUserForm.invalid){
      this.updateUserForm.markAllAsTouched();      
      return;
    }else{
      const updateUser: User = {
        userId  : this.currentUser.userId,
        email   : this.currentUser.email,
        name    : this.currentUser.name,
        password: this.currentUser.password,
        typeOfInstitution: this.currentUser.typeOfInstitution,
      } 
      console.log(updateUser);
      this.ApiService.updateUser(updateUser) 
   }
  }
  pushInstitution(value:string){
    console.log(value)
    if(value == 'false'){
      this.currentUser.typeOfInstitution = 4;
      //this.updateUserForm.controls['organizationType'].setValue(4);
    }else{
      this.currentUser.typeOfInstitution = value;
      //this.updateUserForm.controls['organizationType'].setValue(value);
    }
    
  }

}
