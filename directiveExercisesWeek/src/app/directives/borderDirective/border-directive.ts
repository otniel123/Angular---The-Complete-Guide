import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appBorderDirective]',
  host:{
    '(click)': 'onClick()',
    '[style.border]': 'isBorderActive() ? "5px solid red" : "none"'
  }
})
export class BorderDirective {
  constructor() {}

  isBorderActive = signal(false);

  onClick(){
    this.isBorderActive.set(!this.isBorderActive());
  }
}
