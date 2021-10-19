import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import { CreateProjectRoutingRoutingModule } from './create-project-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

import { ProjectDescriptionComponent } from 'src/app/components/feature-components/project-description/project-description.component';
import { TechsetComponent } from 'src/app/components/feature-components/techset/techset.component';
import { FormsModule } from '@angular/forms';
import { DragDropComponent } from 'src/app/components/feature-components/drag-drop/drag-drop.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFileUploaderModule } from 'angular-file-uploader';

@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectDescriptionComponent,
    TechsetComponent,
    DragDropComponent
  ],
  imports: [
    CommonModule,
    CreateProjectRoutingRoutingModule,
    SharedModule,
    FormsModule,
    NgbModule,
    AngularFileUploaderModule
  ]
})
export class CreateProjectModule { }
