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

}
