import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { retryWhen } from 'rxjs/operators/retryWhen';


@Injectable()
export class AuthService {
 private token = '';
  constructor() { }

  signupUser(email:string , password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(
      error=>console.log(error)
    );
  }

  signIn(email:string , password: string){
    firebase.auth().signInWithEmailAndPassword(email, password).then(

      response => { firebase.auth().currentUser.getToken().then(
        token => this.token = token
      )},
      error=>console.log(error)
    );
  }

  getToken(){
    firebase.auth().currentUser.getToken().then(
      token => this.token = token
    );
    return this.token;
  }

  isAuthenticated(){
    return this.token != '';
  }
}


