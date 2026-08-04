import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appRandomBackgroundDirective]',
})
export class RandomBackgroundDirective {
  constructor() {
    this.element.nativeElement.style.backgroundColor = this.generateRandomColor();
  }

  element = inject(ElementRef<HTMLElement>);

  generateRandomColor(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`
  }
}
