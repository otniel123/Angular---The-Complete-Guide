import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-produc-card-component',
  standalone: true,
  imports: [],
  templateUrl: './produc-card-component.html',
  styleUrl: './produc-card-component.css',
})
export class ProducCardComponent {

  @Input({required: true}) produto !: Product;

  get getPreco(){
    return 'BRL$' + this.produto.price;
  }

  get getInStock(){
    return this.produto.inStock;
  }

}


export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  inStock: boolean;
}