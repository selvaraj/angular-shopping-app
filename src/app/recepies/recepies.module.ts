import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { RecepiesComponent } from './recepies.component';
import { RecepiesListComponent } from './recepies-list/recepies-list.component';
import { RecepiesDetailComponent } from './recepies-detail/recepies-detail.component';
import { RecepieItemComponent } from './recepies-list/recepie-item/recepie-item.component';
import { RecepieStartComponent } from './recepie-start/recepie-start.component';
import { RecepieEditComponent } from './recepie-edit/recepie-edit.component';
import { RecepieRoutingModule } from "./recepie-routing.module";
import { SharedModule } from "../shared/shared.module";


@NgModule({
  declarations:[
    RecepiesComponent,
    RecepiesListComponent,
    RecepiesDetailComponent,
    RecepieItemComponent,
    RecepieStartComponent,
    RecepieEditComponent
  ],
  imports:[ CommonModule, ReactiveFormsModule, RecepieRoutingModule, SharedModule]
})
export class RecepieModule {

}
