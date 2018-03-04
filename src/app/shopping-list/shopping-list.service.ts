import { Injectable, EventEmitter } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model'
import { Subject } from 'rxjs/Subject';



@Injectable()
export class ShoppingListService {

  private ingredients: Ingredients[] = [ new Ingredients("chilie", 5), new Ingredients("onion",2)];

  ingredientsEdit = new Subject<number>();

  ingredientsChanged = new Subject<Ingredients[]>();
  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index:number) {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredients ) {
   this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.getIngredients());
  }

  addIngredients(ings: Ingredients[] )  {
  this.ingredients.push(...ings);
  this.ingredientsChanged.next(this.getIngredients());
  }

  updateIngredient(index:number, ingredient: Ingredients ) {
    this.ingredients[index]=ingredient;
     this.ingredientsChanged.next(this.getIngredients().slice());
   }

   deleteIngredient(index:number ) {
    this.ingredients.splice(index,1);
     this.ingredientsChanged.next(this.getIngredients().slice());
   }

}
