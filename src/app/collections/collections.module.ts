import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CollectionsRoutingModule } from './collections-routing.module';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionsRoutingModule
  ],
  declarations: [CollectionsHomeComponent],
  exports:[]
})
export class CollectionsModule { }
