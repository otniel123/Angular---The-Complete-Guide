import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-status-badge',
  imports: [],
  templateUrl: './status-badge.html',
  styleUrl: './status-badge.css',
  host: {
    '[class]': 'status',
  }
})
export class StatusBadge {
  @Input({required: true}) status !: 'success' | 'warning' | 'danger';
  @Input({required: true}) title !: string;

  get getStatus(){
    return this.status;
  }
}
