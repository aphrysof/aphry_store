import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  Product } from '../interfaces/aphry-store';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product! : Product

}
