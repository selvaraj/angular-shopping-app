import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ShoppingListModule } from '../shopping-list/shopping-list.module';
import { RecepieService } from '../recepies/recepie.service';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../auth/auth.interceptor';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule,SharedModule
  ],
  declarations: [HomeComponent, HeaderComponent],
  exports:[AppRoutingModule,HeaderComponent],
  providers: [
    ShoppingListModule,
    RecepieService,
    AuthService,
    AuthGuardService,
    ShoppingListService,
    {provide: HTTP_INTERCEPTORS,useClass: AuthInterceptor,multi:true}
  ],
})
export class CoreModule { }
