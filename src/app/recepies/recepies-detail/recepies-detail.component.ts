import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepies-detail',
  templateUrl: './recepies-detail.component.html',
  styleUrls: ['./recepies-detail.component.css']
})
export class RecepiesDetailComponent implements OnInit {

  recepie: Recepie;
 id:number;
  constructor(private recepieService: RecepieService, private route: ActivatedRoute,private router:Router) { }

  ngOnInit() {

    this.route.params.subscribe(
      (params :Params)=>{
        this.id = +params['id'];
        this.recepie = this.recepieService.getRecepie(this.id);
      }
    );

  }
  addToShoppingList()
  {
    this.recepieService.addIngredientsToShoppingList(this.recepie.ingredients);
  }

  onEditRecepie(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }

  onDeleteRecepie(){

      this.recepieService.deleteRecepie(this.id);
      this.router.navigate(['/recepies']);
  }

}
