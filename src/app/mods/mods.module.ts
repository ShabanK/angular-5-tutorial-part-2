import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';

@NgModule({
  imports: [
    CommonModule,
    ModsRoutingModule
  ],
  declarations: [ModsHomeComponent],
  exports:[ModsHomeComponent]
})
export class ModsModule { }
