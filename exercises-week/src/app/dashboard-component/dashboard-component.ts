import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../day-one/header-component/header-component';
import { StatCardComponent } from '../day-one/stat-card-component/stat-card-component';
import { UserListComponent } from '../day-one/user-list-component/user-list-component';
import { CardComponent } from '../day-two/card-component/card-component';
import { SearchBoxComponent } from '../day-three/search-box-component/search-box-component';
import { ButtonComponent } from '../day-three/button-component/button-component';
import { LinkComponent } from '../day-three/link-component/link-component';
import { TooltipHostComponent } from '../day-five/tooltip-host-component/tooltip-host-component';

@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule, HeaderComponent, StatCardComponent, UserListComponent, CardComponent, SearchBoxComponent, ButtonComponent, LinkComponent, TooltipHostComponent],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  
  onClickSearchButton(info: string){
    alert(info);
  }
}
