import { Directive} from '@angular/core';

@Directive({
  selector: '[appHoverLogDirective]',
  host: {
    '(mouseenter)': 'onHover()',
    '(mouseleave)': 'onBlur()'
  }
})
export class HoverLogDirective {
  constructor() {}

  onHover(){
    console.log("ENTER");
  }

  onBlur(){
    console.log("LEAVE");
  }
}
