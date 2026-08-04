import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'input[appAutoSelectDirective]',
  host: {
    '(focus)': 'onFocus()'
  }
})
export class AutoSelectDirective {
  element = inject(ElementRef<HTMLElement>)
  constructor() {}

  onFocus(){
    this.element.nativeElement.select()
  }
}
