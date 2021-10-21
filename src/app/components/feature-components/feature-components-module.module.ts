import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AdminTableComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports : [
    AdminTableComponent
  ]
})
export class FeatureComponentsModuleModule { }
