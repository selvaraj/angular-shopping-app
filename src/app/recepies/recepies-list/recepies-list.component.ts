import { Component, OnInit} from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css']
})
export class RecepiesListComponent implements OnInit {

  recepies: Recepie[];


  constructor(private recepieService: RecepieService,private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.recepies = this.recepieService.getRecepies();
    this.recepieService.recepiesChanged.subscribe(
      (recepieArray:Recepie[])=>{
        this.recepies = recepieArray;
      }
    );
  }

  onNewRecepie(){
    this.router.navigate(['new'],{relativeTo: this.route});

  }
}
