import {Recepie} from '../recepies/recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';
import {HttpClient, HttpErrorResponse, } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class RecepieService {

  recepiesChanged = new Subject<Recepie[]>();
   url = 'https://my-recepie-book-6c73d.firebaseio.com/data.json';

  private  recepies: Recepie [] =[ new Recepie('test recepie','simple recepie',
  'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg',
[
  new Ingredients('tomato', 3), new Ingredients('onnion',6)
]),
  new Recepie('test recepie2','simple recepie2',
  'http://goodtoknow.media.ipcdigital.co.uk/111/000016ef4/543a_orh412w625/Butter-chicken-recipe.jpg',
  [  new Ingredients('garlic', 3), new Ingredients('onnion',6)])];

  constructor(private authService:AuthService,  private slService: ShoppingListService , private httpClient:HttpClient) {}

  getRecepies() {
    return this.recepies.slice();
  }
  getRecepie(index: number) {
    return this.recepies.slice()[index];
  }

  setRecepies(recepiesInput: Recepie[])
  {
    this.recepies = recepiesInput;
    this.recepiesChanged.next(this.getRecepies());
  }

  addIngredientsToShoppingList(ings: Ingredients[] ) {
    this.slService.addIngredients(ings);
  }

  addRecepie(recepie:Recepie){
    this.recepies.push(recepie);
    this.recepiesChanged.next(this.getRecepies());
  }

  updateRecepie(index:number,recepie:Recepie){
    this.recepies[index] = recepie;
    this.recepiesChanged.next(this.getRecepies());
  }

  deleteRecepie(index:number){
    this.recepies.splice(index,1);
    this.recepiesChanged.next(this.getRecepies());
  }

  saveRecepies(recepies:Recepie[])
  {

    const token  = this.authService.getToken();
     return this.httpClient.put(this.url,recepies).pipe(
       catchError(this.handleError)
      );

  }

  fetchRecepies():Observable<any>
  {
    const token  = this.authService.getToken();
    return this.httpClient.get<Recepie[]>(this.url).pipe(
      catchError(this.handleError)
    );
  }
  handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
    } else {
         // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
    }
    return new ErrorObservable('please try again');
  }


}
