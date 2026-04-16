import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { ProductCardComponentComponent } from './product/product-card-component/product-card-component.component';
import { ProducCardComponent } from './productCard/produc-card-component/produc-card-component';
import { DUMMY_PRODUCTS_CARD } from './dummy-product-card';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, ProductCardComponentComponent, ProducCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products = DUMMY_PRODUCTS_CARD;
  users = DUMMY_USERS;
  
}
