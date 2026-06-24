import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'div[appHighLightCard]',
  imports: [],
  templateUrl: './high-light-card-component.html',
  styleUrl: './high-light-card-component.css',
})
export class HighLightCardComponent {
  @Input({required: true}) level !: 'info' | 'warning' | 'danger';
}
