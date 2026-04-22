import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

//import { DUMMY_USERS } from '../dummy-users';

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length)

// type User = {
//   id: string;
//   avatar: string;
//   name: string;
// }

interface User{
    id: string;
    avatar: string;
    name: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  
  @Input({required: true}) user!: User;
  @Output() select = new EventEmitter<string>();
  

  // Signal approach:
  // avatar = input.required<string>();
  // name = input.required<string>();
  // select = output<string>();

  // imagePath = computed(() =>{
  //   return 'assets/users/' + this.avatar();
  // });

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
      this.select.emit(this.user.id);
  }





  // ============Working with some concepts in Angular================ 

  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath(){
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  // onSelectUser(){
  //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
  //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
  // }
}
