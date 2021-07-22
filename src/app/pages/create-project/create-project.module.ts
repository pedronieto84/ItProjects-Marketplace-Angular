import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateProjectComponent } from './create-project.component';
import { CreateProjectRoutingRoutingModule } from './create-project-routing.module';
import { SharedModule } from 'src/app/components/shared/shared.module';

import { ProjectDescriptionComponent } from 'src/app/components/feature-components/project-description/project-description.component';
import { TechsetComponent } from 'src/app/components/feature-components/techset/techset.component';

@NgModule({
  declarations: [
    CreateProjectComponent,
    ProjectDescriptionComponent,
    TechsetComponent
  ],
  imports: [
    CommonModule,
    CreateProjectRoutingRoutingModule,
    SharedModule
  ]
})
export class CreateProjectModule { }
