import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';
import {NgForm} from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
@ViewChild("f") form:NgForm;
 subscription:Subscription;
 editItemIndex:number;
 editMode = false;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.shoppingListService.ingredientsEdit.subscribe(
      (index:number)=>{
        this.editMode = true;
        this.editItemIndex = index;
        this.form.setValue({
        'name':this.shoppingListService.getIngredient(index).name,
        'amount':this.shoppingListService.getIngredient(index).amount
        });

    });



}

ngOnDestroy(){
  if(this.subscription){
    this.subscription.unsubscribe();
  }


}
onAddItem(form:NgForm) {
 const formVal = form.value;
 const ing = new Ingredients(formVal.name, formVal.amount);
if(this.editMode){
 this.shoppingListService.updateIngredient(this.editItemIndex, ing);
}else{
  this.shoppingListService.addIngredient(ing);
}
this.editMode = false;
this.form.reset();

}

onClear() {

  this.form.reset();
  this.editMode = false;
}
onDelete(){
  if(this.editMode)
  {
    this.shoppingListService.deleteIngredient(this.editItemIndex);
  }
  this.editMode = false;
}
}
