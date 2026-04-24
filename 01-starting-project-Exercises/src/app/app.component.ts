import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { ProductCardComponentComponent } from './product/product-card-component/product-card-component.component';
import { ProducCardComponent } from './productCard/produc-card-component/produc-card-component';
import { TaskItemComponentComponent } from './taskItem/task-item-component/task-item-component.component';
import { CounterButtonComponent } from './counter-button/counter-button.component';
import { AlertBoxComponent } from './alert-box/alert-box.component';
import { UserListComponent } from './user-list/user-list.component';
import { ToggleCardComponent } from './toggle-card/toggle-card.component';
import { DUMMY_PRODUCTS_CARD } from './dummy-product-card';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, ProductCardComponentComponent, ProducCardComponent, TaskItemComponentComponent, CounterButtonComponent, AlertBoxComponent, UserListComponent, ToggleCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  products = DUMMY_PRODUCTS_CARD;
  users = DUMMY_USERS;

  tituloTask1: string = "Titulo da task teste 1";
  descricaoTask1: string = "Descrição teste 1"
  dueDateTask1: string = "10/05/2026";
  assigneeTask1: string = "Otniel Marques";

  labelButton: string = "Nível de urgencia"
  minButton: number = 1
  maxButton: number = 10;
  initialValue: number = 1;

  isShowAlertHidden: boolean = false;
  typeAlert: 'sucess' | 'warning' | 'error' = 'error';

  messageAlert: string = "Problema super urgente";

  tituloToggleCard: string = "Titulo aleatório para toggle";

  setShowAlertToHidden() {
    this.isShowAlertHidden = true;
  }

  get getShowAlert(){
    return this.isShowAlertHidden;
  }
}
