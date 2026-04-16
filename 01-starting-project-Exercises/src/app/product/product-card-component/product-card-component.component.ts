import { Component } from '@angular/core';

import { DUMMY_PRODUCTS } from '../../dummy-products';

const index = Math.floor(Math.random() * DUMMY_PRODUCTS.length)
@Component({
  selector: 'app-product-card-component',
  standalone: true,
  imports: [],
  templateUrl: './product-card-component.component.html',
  styleUrl: './product-card-component.component.css'
})
export class ProductCardComponentComponent {

  selectedProduct = DUMMY_PRODUCTS[index];

  get getPreco(){
    return "R$ " + this.selectedProduct.price.toString().replace('.', ',')
  }

  get getImagePath(){
    return 'assets/product-card/' + this.selectedProduct.image
  }
}
