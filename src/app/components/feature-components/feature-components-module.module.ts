import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTableComponent } from './admin-table/admin-table.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UserTableComponent } from './user-table/user-table.component';  
import {MatSortModule} from '@angular/material/sort'; 


@NgModule({
  declarations: [
    AdminTableComponent,
    UserTableComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule
  ],
  exports : [
    AdminTableComponent,
    UserTableComponent
  ]
})
export class FeatureComponentsModuleModule { }
