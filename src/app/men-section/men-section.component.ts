import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Categories } from '../aphry-store';
import { Apollo } from 'apollo-angular';
import { GET_CATEGORIES } from '../graphql.operations';

@Component({
  selector: 'app-men-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './men-section.component.html',
  styleUrl: './men-section.component.css'
})
export class MenSectionComponent implements OnInit {
  categories: Categories = {
    categories: [{
      products: []
    }]
  }

  loading: boolean = true;

  constructor(private apollo: Apollo){}

  ngOnInit(): void {
      this.getClothes()
  }

  getClothes (){
    this.apollo.watchQuery<any>({
      query: GET_CATEGORIES,
    }).valueChanges.subscribe(({ data, loading, error}) => {
      this.categories = data;
      this.loading = loading
    })
  }

}
