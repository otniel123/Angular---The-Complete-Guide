import { Directive } from '@angular/core';
import { HoverLogDirective } from '../hoverLogDirective/hover-log-directive';
import { ClickLogDirective } from '../clickLogDirective/click-log-directive';
import { CursorPointerDirective } from '../cursorPointerDirective/cursor-pointer-directive';

@Directive({
  selector: '[appButtonBehaviorDirective]',
  hostDirectives:[HoverLogDirective, ClickLogDirective, CursorPointerDirective]
})
export class ButtonBehaviorDirective {
  constructor() {}
}
