import { Component, inject } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-header-component',
  imports: [],
  templateUrl: './header-component.html',
  styleUrl: './header-component.css',
  host: {
    class: 'header-container'
  }
})
export class HeaderComponent {
  userService = inject(UserService);

  userList = this.userService.getUsersLis();
}
