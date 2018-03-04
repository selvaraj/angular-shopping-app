import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecepieService } from '../../../recepies/recepie.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepie: Recepie;
  @Input() index:number;

  constructor(private recepieService: RecepieService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
  }




}


