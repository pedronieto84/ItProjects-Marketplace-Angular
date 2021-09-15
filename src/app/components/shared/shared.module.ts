import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { LoadingSpinnerComponent } from './loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DatePickerComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule
  ], exports: [
    NavbarComponent,
    DatePickerComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
