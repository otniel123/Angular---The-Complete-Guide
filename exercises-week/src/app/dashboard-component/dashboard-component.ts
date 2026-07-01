import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../day-one/header-component/header-component';
import { StatCardComponent } from '../day-one/stat-card-component/stat-card-component';
import { UserListComponent } from '../day-one/user-list-component/user-list-component';
import { CardComponent } from '../day-two/card-component/card-component';

@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule, HeaderComponent, StatCardComponent, UserListComponent, CardComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  
}
