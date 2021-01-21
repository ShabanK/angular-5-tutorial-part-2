import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';
import { SharedModule } from "../shared/shared.module";
import { TableComponent } from './table/table.component'
@NgModule({
  imports: [
    CommonModule,
    CollectionsRoutingModule,
    SharedModule
  ],
  declarations: [CollectionsHomeComponent, TableComponent],
  exports:[]
})
export class CollectionsModule { }
