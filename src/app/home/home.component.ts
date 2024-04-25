import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_CATEGORIES, GET_PRODUCTS } from '../graphql.operations';
import { Categories, Category } from '../aphry-store';
import { ProductCardComponent } from '../product-card/product-card.component';
import { AphrystoreService } from '../aphrystore.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProductCardComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  categories: Categories = {
      categories: [{
        products: []
      }]
  }

  loading: boolean = true;


  constructor(private apollo: Apollo, private AphrystoreService: AphrystoreService){}

  ngOnInit() {    
    this.getCategories()
  }



  getCategories () {
    this.apollo.watchQuery<any>({
      query: this.AphrystoreService.getProductCategories
    }).valueChanges.subscribe(({data, loading}) => {
      this.categories = data
      this.loading = loading
    })
  }
}
