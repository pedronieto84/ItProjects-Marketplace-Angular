import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule, RegisterRoutingModule, NgbModule
  ]
})
export class RegisterModule { }
