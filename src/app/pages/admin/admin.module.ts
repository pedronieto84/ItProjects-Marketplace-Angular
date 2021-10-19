import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminTableComponent } from 'src/app/components/feature-components/admin-table/admin-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AdminComponent,
    AdminTableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule
  ]
})
export class AdminModule { }
