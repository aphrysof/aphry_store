import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Apollo } from 'apollo-angular';
import { GET_CURRENCIES } from './graphql.operations';
import { Currencies } from './interfaces/aphry-store';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  currencies: Currencies[] = []

  constructor( private apollo: Apollo){}

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


}
