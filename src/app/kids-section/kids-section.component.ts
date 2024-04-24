import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Categories } from '../aphry-store';
import { Apollo } from 'apollo-angular';
import { GET_CATEGORIES } from '../graphql.operations';

@Component({
  selector: 'app-kids-section',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './kids-section.component.html',
  styleUrl: './kids-section.component.css'
})
export class KidsSectionComponent implements OnInit {
  categories: Categories = {
    categories: [{
      products: []
    }]
  }
  loading: boolean = true;

  constructor(private apollo: Apollo){}

  ngOnInit(): void {
      this.getTech()
  }

  getTech (){
    this.apollo.watchQuery<any>({
      query: GET_CATEGORIES,
    }).valueChanges.subscribe(({ data, loading, error}) => {
      this.categories = data;
      this.loading = loading
    })
  }
}
