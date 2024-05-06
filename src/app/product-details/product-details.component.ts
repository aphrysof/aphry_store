import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../interfaces/aphry-store';
import { Apollo } from 'apollo-angular';
import { AphrystoreService } from '../services/aphrystore.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AphrystorePipePipe } from '../pipe/aphrystore-pipe.pipe';

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
  productId: string = ''
  selectedImage = ''
  selected:boolean = false


  constructor(private apollo: Apollo, private  storeService: AphrystoreService){
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

  changeImage (value: any) {
    this.selectedImage = value
  }

}
