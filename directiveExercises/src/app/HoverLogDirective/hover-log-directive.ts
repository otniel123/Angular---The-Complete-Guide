import { Directive } from '@angular/core';

@Directive({
  selector: '[appHoverLogDirective]',
  host: {
    '(mouseenter)': 'onMouseOverEnter()',
    '(mouseleave)': 'onMouseOverLeft()'
  }
})
export class HoverLogDirective {
  constructor() {}

  onMouseOverEnter(){
    console.log('Mouse entered');
  }

  onMouseOverLeft(){
    console.log('Mouse left')
  }
}
