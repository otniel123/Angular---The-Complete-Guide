import { AfterContentInit, afterNextRender, afterRender, Component, contentChild, ContentChild, ElementRef, HostBinding, HostListener, inject, input, Input, ViewEncapsulation } from '@angular/core';

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
export class ControlComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    
  }
  //@HostBinding('class') className = 'control';
  label = input.required<string>();
  private el = inject(ElementRef);
  //@ContentChild('input') private control ?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

  constructor(){
    afterRender(() =>{
      console.log('afterRender')
    });
    afterNextRender(() => {
      console.log("afterNextRender");
    });
  }

  onClick(){
    console.log(this.el);
    console.dir(this.control());
  }
  
}
