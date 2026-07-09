import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-card-compnent',
  imports: [],
  templateUrl: './user-card-compnent.html',
  styleUrl: './user-card-compnent.css',
})
export class UserCardCompnent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log("Input foi atualizado.")
    console.log("Valor antigo do Input: " + changes['isValid'].previousValue)
    console.log("Valor do input agora: " + changes['isValid'].currentValue);
  }
  @Input({required: true}) isValid: boolean = true;
}
