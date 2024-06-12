import {Component, OnInit, inject, Output, EventEmitter} from '@angular/core';
import {Attribute, AttributeSet, Product} from '../interfaces/aphry-store';
import { Apollo } from 'apollo-angular';
import { AphrystoreService } from '../services/aphrystore.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AphrystorePipePipe } from '../pipe/aphrystore-pipe.pipe';
import {CartService} from "../services/cart.service";

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, AphrystorePipePipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent  {
[x: string]: any;
  route: ActivatedRoute = inject(ActivatedRoute)
  productDetails: Product | undefined
  selectedImage = ''
  variants: string[] = []
  selectedVariants: any = {};




  constructor(private apollo: Apollo, private  storeService: AphrystoreService, private cartService: CartService){
    const productId = this.route.snapshot.params['id']
    this.apollo.watchQuery<any>({
      query: this.storeService.getProductById, variables: {
        id: productId
      }
    }).valueChanges.subscribe(({data}) => {
      this.productDetails = data.product
      this.selectedImage = data.product.gallery[0]
    })
  }

  selectVariant (variantId: string, itemId: string) {
      this.selectedVariants[variantId] = itemId
  }

  addToCart (product: Product) {
      console.log('item', product, this.selectedVariants)
  }

  changeImage (value: any) {
    this.selectedImage = value
  }

}
