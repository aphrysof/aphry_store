import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Product} from "../interfaces/aphry-store";
import {CommonModule} from "@angular/common";
import {CartItemCardComponent} from "../cart-item-card/cart-item-card.component";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, CartItemCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{
  cartItems: Product[] = []

  constructor(private cart: CartService) {
  }
  ngOnInit() {
   this.getCartProducts()

  }

  getCartProducts () {
    this.cartItems = this.cart.getItems()
  }

}
