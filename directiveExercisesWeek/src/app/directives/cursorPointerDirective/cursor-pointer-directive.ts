import { Directive } from '@angular/core';

@Directive({
  selector: '[appCursorPointerDirective]',
  host:{
    '[style.cursor]': '"pointer"'
  }
})
export class CursorPointerDirective {
  constructor() {}
}
