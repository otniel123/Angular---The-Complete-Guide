import { Directive, input } from '@angular/core';

@Directive({
  selector: '[appInputDirective]',
  host: {
    '[style.color]': 'textColor()'
  }
})
export class InputDirective {
  textColor = input('black', {alias: 'appInputDirective'})
  constructor() {}
}
