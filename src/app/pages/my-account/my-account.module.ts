import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyAccountComponent } from './my-account.component';
import { CreateProjectRoutingRoutingModule } from './my-account-routing.module';



@NgModule({
  declarations: [MyAccountComponent],
  imports: [
    CommonModule, CreateProjectRoutingRoutingModule
  ]
})
export class MyAccountModule { }
