import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { ShoppingListComponent } from "./shopping-list.component";
import { RouterModule } from "@angular/router";

const shoppingListRoutes:Routes = [
  {path:'shopping-list',component:ShoppingListComponent}
];

@NgModule({
  declarations:[],
  imports:[RouterModule.forChild(shoppingListRoutes)],
  exports:[RouterModule]
})

export class ShoppingListRoutingModule {}
