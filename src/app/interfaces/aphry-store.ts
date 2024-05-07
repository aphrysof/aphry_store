export interface Currencies {
    label: string,
    symbol: string
}

export interface  Price {
    currency: Currencies
    amount: number
  }

export interface Attribute {
    displayValue: string
    value: string
    id: string
  }

export interface  AttributeSet {
    id: string
    name: string
    type: string
    items: [Attribute]
  }

export interface Product {
  quantity: number,
  id: string
  name:string
  inStock: boolean
  gallery: [string]
  description: any
  category: string
  attributes: {
    id: string
    name: string
    type: string
    items: {
      displayValue: string
      value: string
      id: string
    }[]
  }[]
  prices: [Price]
  brand: string
}

export interface Category {
    name: string
    products: Product[]
  }

export interface Categories {
  categories: {
    products: Product[]
  }[]
}
