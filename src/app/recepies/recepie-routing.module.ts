import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import { RecepiesComponent } from './recepies.component';
import { RecepieStartComponent } from "./recepie-start/recepie-start.component";
import { RecepiesDetailComponent } from "./recepies-detail/recepies-detail.component";
import { RecepieEditComponent } from "./recepie-edit/recepie-edit.component";
import { AuthGuardService } from '../auth/auth-guard.service';

const recepieRoutes :Routes=[

  {path:'recepies',component:RecepiesComponent , children:[

    {path:'',component:RecepieStartComponent},
    {path:'new', component:RecepieEditComponent ,canActivate:[AuthGuardService]},
    {path:':id',component:RecepiesDetailComponent},

    {path:':id/edit',component:RecepieEditComponent, canActivate:[AuthGuardService]}
  ]}


];

@NgModule(
  {
    declarations:[],
    imports: [RouterModule.forChild(recepieRoutes)],
    exports: [RouterModule]
  }
)
export class RecepieRoutingModule{}
