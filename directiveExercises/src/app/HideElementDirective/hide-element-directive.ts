import { Directive, input, signal } from '@angular/core';

@Directive({
  selector: '[appHideElementDirective]',
  host:{
    '[style.display]': "isHidden() ? 'none' : null",
    '(dblclick)': 'onDoubleClickButton()'
  }
})
export class HideElementDirective {
  isHidden = signal(false);
  constructor() {}

  onDoubleClickButton(){
    this.isHidden.set(true);
  }
}
