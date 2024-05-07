import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../interfaces/aphry-store";
import {NgForOf} from "@angular/common";

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
  @Input() cartItem!: Product
}
