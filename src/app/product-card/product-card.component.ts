import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Product } from '../aphry-store';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product! : Product

}
