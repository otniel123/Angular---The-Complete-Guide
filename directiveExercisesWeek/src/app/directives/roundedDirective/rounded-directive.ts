import { Directive } from '@angular/core';

@Directive({
  selector: '[appRoundedDirective]',
  host: {
    '[style.border-radius]': '"50%"',
    '[style.border]': '"3px solid red"'
  }
})
export class RoundedDirective {
  constructor() {}
}
