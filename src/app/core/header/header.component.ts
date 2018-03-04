import { Component, EventEmitter, Output } from "@angular/core";
import { RecepieService } from "../../recepies/recepie.service";
import { AuthService } from "../../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
 @Output() selectedFeature = new EventEmitter<string>();
  onSelectFeature(feature: string) {
    console.log('event emitted');
    this.selectedFeature.emit(feature);
  }

  constructor(private recepieService:RecepieService,private authService:AuthService){}

  OnSaveData(){
    this.recepieService.saveRecepies(this.recepieService.getRecepies()).subscribe(
      (response:Response) =>{ console.log(response);}
    );
  }

  onFetchData() {
    this.recepieService.fetchRecepies().subscribe(
      (data:any[])=>{ console.log(data); this.recepieService.setRecepies(data);}
    );
  }
}
