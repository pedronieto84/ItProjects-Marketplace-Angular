import { Component, OnInit } from '@angular/core';
//services
import { ApiService } from 'src/app/services/api.service';
//form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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


  //campos de formulario
  updateUserForm: FormGroup = this.fb.group({
    userName     : ['', [Validators.minLength(1), Validators.maxLength(70)]],
    UserEmail     : ['', [Validators.email]], 
    userPassword     : ['', [
        Validators.minLength(5), 
        Validators.maxLength(10), 
        Validators.pattern('^[a-zA-Z0-9!@#$%^&*]{5,10}$')
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
    console.log("usr Upadate")
    


      if(this.updateUserForm.invalid){
        //Pone como si todos los campos han sido tocados
        this.updateUserForm.markAllAsTouched();      
        return;
    }else{
     
      //envio los datos del formulario modificado
      // this.ApiService.updateUser(user: User) {
       

    } 

   }
  

}
