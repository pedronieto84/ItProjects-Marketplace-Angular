import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

import { ProjectCardComponent } from './project-card/project-card.component';
import { ProjectLineComponent } from './project-line/project-line.component';

import { LoadingSpinnerComponent } from './loader-spinner/loader-spinner.component';
@NgModule({
  declarations: [
    NavbarComponent,
    DatePickerComponent,
    ProjectCardComponent,
    LoadingSpinnerComponent,
    ProjectLineComponent

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
    LoadingSpinnerComponent,
    ProjectLineComponent

  ]
})
export class SharedModule { }
