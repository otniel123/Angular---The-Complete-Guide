import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-toggle-card',
  standalone: true,
  imports: [],
  templateUrl: './toggle-card.component.html',
  styleUrl: './toggle-card.component.css'
})
export class ToggleCardComponent {

  @Input({required: true}) title!: string;
  @Input() isOpen!: boolean;

}
