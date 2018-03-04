import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  })
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredients[];
  ingredientsChangedSubs:Subscription;

  constructor(private shoppingListService: ShoppingListService) {

    this.ingredientsChangedSubs = this.shoppingListService.ingredientsChanged.
    subscribe((ingredientsArr: Ingredients[]) => { this.ingredients = ingredientsArr;});
   }

  ngOnInit() {

    this.ingredients = this.shoppingListService.getIngredients();
  }

  addIngredient(ingred: Ingredients) {
    this.shoppingListService.addIngredient(ingred);
  }

  onEditItem(index:number){
    this.shoppingListService.ingredientsEdit.next(index);
  }

  ngOnDestroy() {
    this.ingredientsChangedSubs.unsubscribe();
  }

}
