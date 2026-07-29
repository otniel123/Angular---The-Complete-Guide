import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appFontSizeDirective]',
  host: {
    '[style.font-size.px]': 'fontSize()',
    '(click)': 'onClickFontSize()'
  }
})
export class FontSizeDirective {
  fontSize = signal(15);
  constructor() {}

  onClickFontSize(){
    console.log("Dentro de increse font size")
    this.fontSize.set(this.fontSize() + 5);
  }
}
