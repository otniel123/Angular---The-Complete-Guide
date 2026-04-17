import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  @Input({required: true}) label !: string;
  @Input() value : number = 0;
  @Input() min: number = 0;
  @Input() max: number = 100;

  incremet(){
    this.value++;
  }

  decrement(){
    this.value--;
  }

  get canIncrement(){
    return this.value < this.max;
  }

  get canDecrement(){
    return this.value > this.min;
  }
}
