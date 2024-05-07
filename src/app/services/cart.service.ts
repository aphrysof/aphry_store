import {Injectable} from '@angular/core';
import {Product} from "../interfaces/aphry-store";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = []
  addToCart (product: Product) {
    const productCopy = [...this.items]

    let findExistingProduct = productCopy.find((item) => item?.id === product.id)

    if(findExistingProduct){
      findExistingProduct.quantity++
    }else {
      findExistingProduct = {
        ...product,
        quantity: 1
      }
      productCopy.push(findExistingProduct)
    }
    this.items = productCopy
    localStorage.setItem('cartProduct', JSON.stringify(productCopy))
  }

  getItems(){
    const cartItems = localStorage.getItem("cartProduct")
    if(cartItems){
      return this.items = JSON.parse(cartItems)
    }else{
      return this.items = []
    }
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor() {


  }
}
