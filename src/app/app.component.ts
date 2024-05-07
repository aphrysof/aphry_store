import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Apollo} from 'apollo-angular';
import {GET_CURRENCIES} from './graphql.operations';
import {Currencies} from './interfaces/aphry-store';
import {CommonModule} from '@angular/common';
import {MatIconModule} from "@angular/material/icon";
import {MatBadgeModule} from "@angular/material/badge";
import {MatButtonModule} from "@angular/material/button";
import {CartService} from "./services/cart.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, RouterLinkActive, CommonModule, MatIconModule, MatBadgeModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
  currencies: Currencies[] = []

  constructor( private apollo: Apollo, private cartService: CartService){}

  ngOnInit() {
      this.getAllCurrencies()
  }

  getAllCurrencies () {
    this.apollo.watchQuery<any>({
      query: GET_CURRENCIES
    }).valueChanges.subscribe(({data, error}) => {
      this.currencies = data.currencies
    })
  }

  getTotalItems () {
    return this.cartService.items.reduce((sum, {quantity}) => sum + quantity, 0)
  }

}
