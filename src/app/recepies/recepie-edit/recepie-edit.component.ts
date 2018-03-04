import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Params } from '@angular/router'
import { RecepieService } from '../recepie.service';
import { FormGroup,FormArray,FormBuilder } from '@angular/forms';
import { Recepie } from '../recepie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {

  id:number;
  editMode:boolean;
  recepieForm:FormGroup;
  constructor(private route:ActivatedRoute , private recepieService:RecepieService, private fb:FormBuilder, private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.editMode = params['id'] !=null;
        this.initForm();
      }
    );


  }

  initForm(){
   let  tempRecepie:Recepie = new Recepie('','','',[]);
   let formArray = new FormArray([]);
   if(this.editMode)
   {
     tempRecepie = this.recepieService.getRecepie(this.id);
     if(tempRecepie.ingredients)
     {
       for(let ing of tempRecepie.ingredients)
       {
       const ingfb = this.fb.group( {'name':[ing.name],'amount':[ing.amount]});
        formArray.push(ingfb);
       }

     }
   }
    this.recepieForm = this.fb.group({
      'name':[ tempRecepie.name],
      'imagePath':[tempRecepie.imagePath],
      'description':[tempRecepie.description],
      'ingredients':formArray
    });
  }
  onSubmit(){
    if(this.editMode)
    {
      this.recepieService.updateRecepie(this.id,this.recepieForm.value);
    }
    else{
      this.recepieService.addRecepie(this.recepieForm.value);
    }
    this.onCancel();
  }

  onCancel(){
this.router.navigate(['../'],{relativeTo:this.route});
  }


  onAddIngredient(){
    const ingfb = this.fb.group( {'name':[''],'amount':['']});
    (<FormArray>this.recepieForm.get('ingredients')).push(ingfb);
  }

  onDelIng(index:number){
    (<FormArray>this.recepieForm.get('ingredients')).removeAt(index);
  }

}
