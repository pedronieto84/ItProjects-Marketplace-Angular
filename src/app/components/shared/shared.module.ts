import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectDefinitionComponent } from './project-definition/project-definition.component';
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ProjectDefinitionComponent,
    DatePickerComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ], exports: [
    NavbarComponent,
    ProjectDefinitionComponent,
    DatePickerComponent
  ]
})
export class SharedModule { }
