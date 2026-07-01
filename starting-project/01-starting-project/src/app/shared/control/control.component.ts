import { Component, ElementRef, HostBinding, HostListener, inject, input, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  //@HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef);

  onClick(){
    alert("Click")
    console.log(this.el);
  }
  
}
