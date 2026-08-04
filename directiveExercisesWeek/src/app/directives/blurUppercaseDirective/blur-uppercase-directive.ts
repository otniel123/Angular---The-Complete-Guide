import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: 'textarea[appBlurUppercaseDirective]',
  host: {
    '(blur)': 'onLoseFocus()'
  }
})
export class BlurUppercaseDirective {
  constructor() {}

  element = inject(ElementRef<HTMLElement>);

  onLoseFocus(){
    this.element.nativeElement.value = this.element.nativeElement.value.toUpperCase();
  }
}
