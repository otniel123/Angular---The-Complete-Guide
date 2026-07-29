import { Directive } from '@angular/core';

@Directive({
  selector: '[appDoubleClickDirective]',
  host:{
    '(dblclick)': 'onDoubleClick()'
  }
})
export class DoubleClickDirective {
  constructor() {}

  onDoubleClick(){
    console.log('Double click detected!');
  }
}
