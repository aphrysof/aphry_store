import {Component, Input, Output, EventEmitter} from '@angular/core';
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


  toggleQuantity (id: any, value: string) {
    const cartCopy = JSON.parse(localStorage.getItem("cartProduct")!);

    const productIndex = cartCopy.findIndex((product: Product) => product.id === id)

    let newProduct = cartCopy[productIndex];

    if(value === "inc") {
      if(newProduct){
        newProduct.quantity++;
        this.cartItem = newProduct;

        cartCopy.slice(productIndex, 1, newProduct)

        localStorage.setItem("cartProduct", JSON.stringify(cartCopy));

      }

    }else if (value === "dec") {
      if (newProduct.quantity > 1) {
        newProduct.quantity--;
        this.cartItem = newProduct
        cartCopy.splice(productIndex, 1, newProduct);

        localStorage.setItem("cartProduct", JSON.stringify(cartCopy));
      }
    }

  }

}
