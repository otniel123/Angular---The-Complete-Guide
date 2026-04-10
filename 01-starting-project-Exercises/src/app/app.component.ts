import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { ProductCardComponentComponent } from './product/product-card-component/product-card-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, ProductCardComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
