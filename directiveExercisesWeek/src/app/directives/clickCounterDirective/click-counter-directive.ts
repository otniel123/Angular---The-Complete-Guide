import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appClickCounterDirective]',
  host: {
    '(click)': 'onClick()'
  }
})
export class ClickCounterDirective {
  clickCounter = signal(0);
  constructor() {}

  onClick(){
    this.clickCounter.set(this.clickCounter() + 1)
    console.log(this.clickCounter())
  }
}
