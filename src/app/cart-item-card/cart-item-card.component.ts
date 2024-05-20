import {Component, Input, OnInit, OnChanges, Output, EventEmitter} from '@angular/core';
import {Product} from "../interfaces/aphry-store";
import {NgForOf} from "@angular/common";
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-cart-item-card',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './cart-item-card.component.html',
  styleUrl: './cart-item-card.component.css'
})
export class CartItemCardComponent {
  @Input() cartItem!: Product;
  @Output() quantityUpdated = new EventEmitter();
  constructor (private  cart: CartService) {
  }
  // toggleQuantity (id: any, value: any) {
  //    this.cart.toggleItemQuantity(id, value)
  // }

  toggleQuantity (id: any, value: string) {
    const cartCopy = JSON.parse(localStorage.getItem("cartProduct")!);

    const productIndex = cartCopy.findIndex((product: Product) => product.id === id)

    let newProduct = cartCopy[productIndex];

    if(value === "inc") {
      if(newProduct){
        newProduct.quantity++;
        this.cartItem = newProduct;
        this.quantityUpdated.emit({
          id: this.cartItem.id,
          quantity: this.cartItem.quantity
        })
        console.log('quantity increased', this.cartItem)

        cartCopy.slice(productIndex, 1, newProduct)

        localStorage.setItem("cartProduct", JSON.stringify(cartCopy));

      }
    }

  }

}
