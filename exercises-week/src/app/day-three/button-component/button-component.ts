import { Component, input } from '@angular/core';

@Component({
  selector: 'button[appButton]',
  imports: [],
  templateUrl: './button-component.html',
  styleUrl: './button-component.css',
  host: {class: 'app-button', '[class.isLoading]': 'loading()', '[class.large]': 'large()'}
})
export class ButtonComponent {
  
  loading(){
    return Math.random() < 0.5;
  }

  large(){
    if(this.loading() === false){
      return Math.random() < 0.5;
    }
    return false;
  }
}
