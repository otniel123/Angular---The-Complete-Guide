import { Directive, inject, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateRefShowDirective]',
})
export class TemplateRefShowDirective {
  private templateRef = inject(TemplateRef);
  constructor() {
    console.log(this.templateRef);
  }
}
