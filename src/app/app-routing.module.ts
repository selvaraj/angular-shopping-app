import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from "./core/home/home.component";


const routes :Routes=[
  {path:'',component:HomeComponent}
 // {path:'recepies',loadChildren :'./recepies/recepies.module#RecepieModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
