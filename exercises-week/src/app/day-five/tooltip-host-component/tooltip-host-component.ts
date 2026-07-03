import { Component, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: '[toolTip]',
  imports: [],
  templateUrl: './tooltip-host-component.html',
  styleUrl: './tooltip-host-component.css',
})
export class TooltipHostComponent {
  @HostBinding('style.opacity')
  opacity = '1';

  @HostListener('mouseenter')
  decreaseStyleOpacity(){
    this.opacity = '0.5'
  }

  @HostListener('mouseleave')
  increaseStyleOpacity(){
    this.opacity = '1';
  }
}
