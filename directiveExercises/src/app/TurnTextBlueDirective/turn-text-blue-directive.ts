import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appTurnTextBlueDirective]',
  host: {
    '[style.color]': 'textColor()',
    '(click)': 'onClick()'
  }
})
export class TurnTextBlueDirective {
  textColor = signal('black');
  constructor() {}

  onClick(){
    this.textColor.set('blue');
  }
}
