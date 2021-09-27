import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//componentes
import { MyAccountComponent } from './my-account.component';

//routes
import {  MyAccountRoutingModule } from '../my-account/my-account-routing.module';

//modules
import { SharedModule } from 'src/app/components/shared/shared.module' 


@NgModule({
  declarations: [
    MyAccountComponent
  ],
  imports: [
    CommonModule, 
    MyAccountRoutingModule,
    NgbModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MyAccountModule { }
