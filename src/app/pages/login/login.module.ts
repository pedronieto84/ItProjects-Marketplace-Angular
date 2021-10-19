import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginRoutingRoutingModule } from './login-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/components/shared/shared.module';




@NgModule({
  declarations: [ LoginComponent ],
  imports: [
    CommonModule,
    LoginRoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
    
  ]
})
export class LoginModule { }
