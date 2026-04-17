import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-alert-box',
  standalone: true,
  imports: [NgClass],
  templateUrl: './alert-box.component.html',
  styleUrl: './alert-box.component.css'
})
export class AlertBoxComponent {
  @Input({required: true}) message!: string;
  @Input() type: 'sucess' | 'warning' | 'error' = 'sucess';
  @Input() dismissible: boolean = true;

  @Output() closed = new EventEmitter<void>();

  get icon(){
    switch(this.type){
      case 'sucess':
        return '✅';
        break;
      case 'warning':
        return '⚠️';
        break;
      case 'error':
        return '❌';
        break;
      default:
        return 'Non-specified';
    }
  }

  get backgroundClass(){
    switch(this.type){
      case 'sucess':
        return 'alert-sucess';
        break;
      case 'warning':
        return 'alert-warning';
        break;
      case 'error':
        return 'alert-error';
        break;
      default:
        return 'alert';
    }
  }

  onClose(){
    this.closed.emit();
  }
}
