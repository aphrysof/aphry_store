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

  toggleItemQuantity (id: any, value: any) {
    const newCart = localStorage.getItem("cartProduct");
    const cartItem = JSON.parse(newCart!);
    //create a copy of the array
    const cartCopy = cartItem.slice();

    //first we need to findIndex of the product based on the id
    const itemIndex = cartCopy.findIndex((product: any) => product.id === id);

    //then create a variable and set the array against the objects index
    let newItem = cartCopy[itemIndex];
    if (value === "inc") {
      if (newItem) {
        //increase the objects quantity by one
        newItem.quantity++;
        //then remove the object and replace it with the newItem
        cartCopy.splice(itemIndex, 1, newItem);
        this.items = cartCopy

        localStorage.setItem("cartProduct", JSON.stringify(cartCopy));
      }
    } else if (value === "dec") {
      if (newItem.quantity > 1) {
        newItem.quantity--;
        cartCopy.splice(itemIndex, 1, newItem);
        this.items = cartCopy;
        localStorage.setItem("cartProduct", JSON.stringify(cartCopy));
      }
    }

  }
  constructor() {


  }
}
