import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule
  ], exports: [
    NavbarComponent,
    DatePickerComponent
  ]
})
export class SharedModule { }
