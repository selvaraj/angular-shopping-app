import { Component } from '@angular/core';
import * as firebase from 'firebase';

import { OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  selectedFeature = 'recipie';
  onFeatureSelected(feature: string){
    this.selectedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({

      apiKey: "AIzaSyDxmkJ9hjJ5KxWUuWXB5naTs4o7u3_AqmM",
    authDomain: "my-recepie-book-6c73d.firebaseapp.com",
    });
  }
}
