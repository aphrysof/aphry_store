import { Injectable } from '@angular/core';
import { Query, gql } from 'apollo-angular';



@Injectable({
  providedIn: 'root'
})
export class AphrystoreService extends Query {
  getProductCategories = gql `
  query Categories {
    categories {
      products {
        id
        name
        gallery
        inStock
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
  `

  getProductById = gql `
  query productDetails($id: String!) {
    product(id: $id) {
      id
      name
      inStock
      brand
      description
      gallery
      prices {
        currency {
          symbol
          label
        }
        amount
      }
      attributes {
        id
        name
        type
        items {
          value
          displayValue
          id
        }
      }
    }
  }
  `
  
}
