import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    NavbarComponent,
    DatePickerComponent,
    ProjectCardComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule
  ], exports: [
    NavbarComponent,
    DatePickerComponent
  ]
})
export class SharedModule { }
