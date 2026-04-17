import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.css'
})
export class UserItemComponent {
  @Input({required: true}) user!: { id: string; name: string; avatar: string };
  @Input() isSelected: boolean = false;

  @Output() select = new EventEmitter<string>();

  onSelect(){
    this.select.emit(this.user.id);
  }

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }
}
