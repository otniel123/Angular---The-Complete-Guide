import { Component, inject } from '@angular/core';
import { User } from '../../dashboard-component/intefarces/user-interface';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-user-list-component',
  imports: [],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css',
})
export class UserListComponent {
  userService = inject(UserService);

  userList = this.userService.getUsersLis();
}
