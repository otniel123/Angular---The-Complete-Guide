import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appAlwaysShowDirective]',
})
export class AlwaysShowDirective {
  appAlwaysShowDirective = input(false);
  private template = inject(TemplateRef);
  private view = inject(ViewContainerRef);
  constructor() {
    effect(() =>{
      this.view.clear()
      if(this.appAlwaysShowDirective()){
        this.view.createEmbeddedView(this.template);
      }
    })
    
  }
}
