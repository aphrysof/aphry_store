import { gql } from "apollo-angular";

const GET_PRODUCTS = gql `
query getProducts {
    category {
    name
       products {
      id
      name
      inStock
      gallery
      description
      category
      attributes {
        id
        name
        type
        items {
          id
          displayValue
          value
        }
       
      }
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      brand
    }
  }
}
`

const GET_CURRENCIES = gql `
  query currencies {
  currencies {
    label
    symbol
  }
}
`

const GET_CATEGORIES = gql `
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

const PRODUCT_DETAILS = gql`
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
`;

export { GET_PRODUCTS, GET_CURRENCIES, GET_CATEGORIES, PRODUCT_DETAILS }