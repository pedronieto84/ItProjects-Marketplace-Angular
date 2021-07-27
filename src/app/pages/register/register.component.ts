import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email:string;
  password:string;
  name:string;
  typeOfInstitution:string;
  hasEmail: boolean = false;
  hasName: boolean = false;
  hasPassword: boolean = false;
  hasTypeOfInst: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  register(){
    const userObject: User = {
      email: this.email,
      name: this.name,
      password: this.password,
      typeOfInstitution: this.typeOfInstitution,
      
    }
    console.log('register', userObject)
  }

  
  get showName(){
    if(this.name !== undefined){
      if(this.name.length >= 2 && this.name.length <= 70){
        this.hasName = true;
        return false
      }else{
        this.hasName = false;
        return true
      }
    }else{
      this.hasName = false;
      return false
    }
  }

  get showEmail(){
       const patternEmail =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
   
     if(this.email !== undefined){
      if(this.email.match(patternEmail)){
        this.hasEmail = true;
        return false
      }else{
        this.hasEmail = false;
        return true
      }
    }else{
      this.hasEmail = false;
      return false
    }
  }

    get showPassword(){
      
       const patternPassword =
         /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,10}$/
   
     if(this.password !== undefined){
      if(this.password.match(patternPassword)){
        this.hasPassword = true;
        return false
      }else{
        this.hasPassword = false;
        return true
      }
    }else{
      this.hasPassword = false;
      return false
    }
  }

  get showTypeOfInstitution(){
      if(this.typeOfInstitution !== undefined){
      if(
        this.typeOfInstitution === ('1') ||
        this.typeOfInstitution === ('2') ||
        this.typeOfInstitution === ('3') ||
        this.typeOfInstitution === ('4') 
        
    ){
        this.hasTypeOfInst = true;
        return false
      }else{
        this.hasTypeOfInst = false;
        return true
      }
    }else{
      this.hasTypeOfInst = false;
      return false
    }
  }

  get isAllOk(){
    return this.hasEmail && this.hasName && this.hasPassword && this.hasTypeOfInst
  }

}
