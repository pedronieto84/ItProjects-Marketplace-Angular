import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { AdminTableComponent } from 'src/app/components/feature-components/admin-table/admin-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ListFilterPipe } from 'src/app/pipes/list-filter-pipe.pipe';



@NgModule({
  declarations: [
    AdminComponent,
    AdminTableComponent,
    ListFilterPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgbModule, 
    FormsModule
  ]
})
export class AdminModule { }
