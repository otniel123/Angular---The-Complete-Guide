import { Component, computed, inject, input } from '@angular/core';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-stat-card-component',
  imports: [],
  templateUrl: './stat-card-component.html',
  styleUrl: './stat-card-component.css',
})
export class StatCardComponent {
  userService = inject(UserService);
  userList = this.userService.getUsersLis();

  icon = input<string>();

  formattedValue = computed(() => this.icon()?.toUpperCase());
}
