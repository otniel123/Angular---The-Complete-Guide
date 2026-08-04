import { Directive, signal } from '@angular/core';

@Directive({
  selector: '[appHoverColorDirective]',
  host: {
    '[style.color]': 'color()',
    '(mouseenter)': 'turnTextWhite()',
    '(mouseleave)': 'turnTextBlack()'
  }
})
export class HoverColorDirective {
  constructor() {}

  color = signal('black')

  turnTextWhite(){
    this.color.set('White')
  }

  turnTextBlack(){
    this.color.set('black')
  }
}
