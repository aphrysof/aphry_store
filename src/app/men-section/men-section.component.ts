import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Categories } from '../interfaces/aphry-store';
import { Apollo } from 'apollo-angular';
import { AphrystoreService } from '../services/aphrystore.service';

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

  constructor(private apollo: Apollo, private AphrystoreServe: AphrystoreService){}

  ngOnInit(): void {
    this.getClothes()
  }

  getClothes (){
    this.apollo.watchQuery<any>({
      query: this.AphrystoreServe.getProductCategories,
    }).valueChanges.subscribe(({ data, loading, error}) => {
      this.categories = data;
      this.loading = loading
    })
  }

}
