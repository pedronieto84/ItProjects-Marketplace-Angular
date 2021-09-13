import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

<<<<<<< HEAD


import { ProjectCardComponent } from './project-card/project-card.component';





import { LoadingSpinnerComponent } from './loader-spinner/loader-spinner.component';


@NgModule({
  declarations: [
    NavbarComponent,
    DatePickerComponent,
    ProjectCardComponent,
    LoadingSpinnerComponent

  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    FormsModule
  ], 
  exports: [
    NavbarComponent,
    DatePickerComponent,
    ProjectCardComponent,
    LoadingSpinnerComponent

  ]
})
export class SharedModule { }
