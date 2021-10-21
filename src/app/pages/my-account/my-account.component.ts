import { Component, OnInit } from '@angular/core';
//services
import { ApiService } from 'src/app/services/api.service';
//form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//interfaces
import { User, Project } from '../../interfaces/interfaces'

//import { __values } from 'tslib';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.scss']
})

export class MyAccountComponent implements OnInit {

  currentUser: any;
  currentUserTypeInstitution:string ="";
 
  projects = [];
  
  //pestañas activas
  active = 1;

  constructor(private fb:FormBuilder, public ApiService: ApiService) { }

  //VALIDACIONES campos de formulario datos de usuario
  updateUserForm: FormGroup = this.fb.group({
    userName          : ['', [  Validators.required,
                                Validators.minLength(1)]],
    UserEmail         : ['', [  Validators.required,
                                Validators.email]], 
    userPassword      : ['', [  Validators.required,
                                Validators.minLength(6),                                
                                Validators.maxLength(10),
                                Validators.pattern(
                                /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,10}$/)]],
    typeOfInstitution : ['', []], 
  })

  //VALIDACIONES campos de formulario, datos de los projectos de ese usuario
  updateProjectForm: FormGroup = this.fb.group({
    title             : ['', [  Validators.required, Validators.minLength(1)]],
    publishedDate     : ['', [  ]],
    deadlineDate      : ['', [  ]],
    bid               : ['', [  Validators.required, Validators.min(1)]],
    state             : ['', [  Validators.required]],
  })


  //validaciones de formulario
  isValidUser( campo: string){ 
    return this.updateUserForm.controls[campo].errors && this.updateUserForm.controls[campo].touched;
  }
  isValidProject( campo: string){ 
    return this.updateProjectForm.controls[campo].errors && this.updateProjectForm.controls[campo].touched;
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
  

  // TAB USER 

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
      this.ApiService.updateUser(updateUser).toPromise().then(res => {
        alert("Usuario actualizado")
      },
      msg =>{
        console.log("Error")
      });
      
   }

  }




  //TAB PROJECTS 
  editProject(key, value, object){

    object[key] = value;
    
    console.log(this.updateProjectForm.invalid)
    if(this.updateProjectForm.invalid){
      this.updateProjectForm.markAllAsTouched();      
      return;
    }
  //   else{
  //     this.ApiService.updateProject(projectObject).subscribe(
  //       (data: any[]) => {    
  //         alert("El projecto se ha actualizado");     
  //       },
  //       err => {
  //         console.log("Error");
  //       });
  //  }

  }
  deleteProject(IdProject:string){
    console.log("delete",IdProject)
      this.ApiService.deleteProject(IdProject).subscribe( 
        (data: any[]) => {    
          alert("El projecto se ha eliminado");
          //actualizar página ?? o eliminar fila actual con viewChild??
          
      },
      err => {
          console.log("Error");
      });
  }

  sendDate(dateType: string, date: any) {
    console.log("sendDate: ",dateType,date )
  }

}
