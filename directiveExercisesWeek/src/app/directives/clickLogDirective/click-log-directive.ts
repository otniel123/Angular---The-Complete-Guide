import { Directive } from '@angular/core';

@Directive({
  selector: '[appClickLogDirective]',
  host: {
    '(click)': 'onClick()'
  }
})
export class ClickLogDirective {
  constructor() {}

  onClick(){
    console.log("CLICK")
  }
}
