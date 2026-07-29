import { AfterViewInit, Directive } from '@angular/core';

@Directive({
  selector: 'button[appConsoleLogDirective]',
})
export class ConsoleLogDirective{
  constructor() {
    console.log("Directive initialized!")
  }
}
