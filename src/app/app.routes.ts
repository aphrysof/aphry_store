import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenSectionComponent } from './men-section/men-section.component';
import { KidsSectionComponent } from './kids-section/kids-section.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import {CartComponent} from "./cart/cart.component";

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Home Page"
    },
    {
        path: 'clothes',
        component: MenSectionComponent,
        title: "Clothes"
    },
    {
        path: 'tech',
        component: KidsSectionComponent,
        title: "Tech"
    },
    {
        path: 'product/:id',
        component: ProductDetailsComponent,
        title: "Product Details"
    },
  {
    path: 'cart',
    component: CartComponent,
    title: "Cart"
  },
];
