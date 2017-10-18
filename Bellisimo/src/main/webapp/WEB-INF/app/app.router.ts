import { AppComponent } from './app.component';
import { ClothingComponent } from './clothing/clothing.component';
import { FoodComponent } from './food/food.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WomenComponent } from './women/women.component';
import {StartersComponent} from "./starters/starters.component";
import {DessertComponent} from "./dessert/dessert.component";


export const AppRoutes: any = [
{path: '' , redirectTo: 'home', pathMatch: 'full'},
{path: 'home', component :HomeComponent  },
{path: 'clothing', component :ClothingComponent  },
{path: 'food', component : FoodComponent  },
{path: 'contact', component : ContactComponent},
{path: 'login', component : LoginComponent},
{path: 'women', component : WomenComponent},
{path: 'starters', component : StartersComponent},
 {path: 'dessert', component : DessertComponent}
];

export const AppComponents: any = [
    AppComponent,
    ClothingComponent,
    FoodComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    WomenComponent,
    StartersComponent,
    DessertComponent
];
