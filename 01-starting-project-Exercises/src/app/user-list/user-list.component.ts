import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users = DUMMY_USERS;

  selectedUserId: string = 'u1';

  get getUsers(){
    return this.users
  }

  onSelectUser(id: string){
    this.selectedUserId = id;
  }

  get selectedUserName(): string{
    const found = this.users.find(user => user.id === this.selectedUserId)
    return found ? found.name : 'Nenhum usuário selecionado'
  }

}
