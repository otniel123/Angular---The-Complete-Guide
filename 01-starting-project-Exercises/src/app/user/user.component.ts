import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) selectedUser !: User;

  isButtonClicked: boolean = false;

  onClickButton(){
    this.isButtonClicked = !this.isButtonClicked;
    
    return this.isButtonClicked ? this.selectedUser.name = this.selectedUser.name + "(Selected)" : this.selectedUser.name = this.selectedUser.name.replace("(Selected)", "");
  }

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar
  }
}

export interface User{
  id: string,
  name: string,
  avatar: string
}
