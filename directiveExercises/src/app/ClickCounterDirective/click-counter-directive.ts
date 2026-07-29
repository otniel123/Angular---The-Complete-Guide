import { Directive, signal } from '@angular/core';

@Directive({
  selector: 'button[appClickCounterDirective]',
  host: {
    '(click)': 'onClickButton()'
  }
})
export class ClickCounterDirective {
  clickNum = signal(0);
  constructor() {}

  onClickButton(){
    this.clickNum.set(this.clickNum() + 1);
    console.log("Counter clicked " + this.clickNum() + " times.")
  }
}
