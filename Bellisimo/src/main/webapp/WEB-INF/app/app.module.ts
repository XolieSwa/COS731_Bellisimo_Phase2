//angular components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import {AppComponents, AppRoutes} from './app.router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import { ReactiveFormsModule } from '@angular/forms';

//components
import { ClothingComponent } from './clothing/clothing.component';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { StartersComponent } from './starters/starters.component';
import { LoginComponent } from './login/login.component';
import { WomenComponent } from './women/women.component';
import { DessertComponent } from './dessert/dessert.component';

//services
import {ProductService} from "./product/product.service";


@NgModule({
  declarations: [
    AppComponent,
    ClothingComponent,
    FoodComponent,
    ContactComponent,
    HomeComponent,
    AppComponents,
    StartersComponent,
    LoginComponent,
    WomenComponent,
    StartersComponent,
    DessertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
              ProductService
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
