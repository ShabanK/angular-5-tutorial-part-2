import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ElementsHomeComponent} from "./elements/elements-home/elements-home.component"
const routes: Routes = [
  { path: "elements", component: ElementsHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
