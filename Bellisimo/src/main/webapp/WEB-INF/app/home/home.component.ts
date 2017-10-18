import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

      constructor(private router: Router) { }

   navigate() {
     this.router.navigate(["clothing"]);
     this.router.navigate(["food"]);
     this.router.navigate(["contact"]);
     this.router.navigate(["home"]);
     this.router.navigate(["login"]);
     this.router.navigate(["women"]);
     this.router.navigate(["starters"]);
     this.router.navigate(["dessert"]);
}
}
