import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_PRODUCTS } from '../graphql.operations';
import { Category } from '../aphry-store';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products: Category = {
    name: "",
    products: []
  }


  constructor(private apollo: Apollo){
   

  }

  ngOnInit() {    
    this.getAllProducts()
  }

  getAllProducts () {
   this.apollo.watchQuery<any>({
      query: GET_PRODUCTS,
    }).valueChanges.subscribe(({ data, loading, error}) => {
        this.products = data.category
    })
  }
}
