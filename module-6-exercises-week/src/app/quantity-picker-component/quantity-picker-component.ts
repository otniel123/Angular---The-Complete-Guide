import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-quantity-picker-component',
  imports: [],
  templateUrl: './quantity-picker-component.html',
  styleUrl: './quantity-picker-component.css',
})
export class QuantityPickerComponent {
  quantidade = input.required<number>();
  quantidadeChange = output<number>();
  min = input.required<number>();
  max = input.required<number>();

  isButtonMinusDisabled(){
    return this.quantidade() > this.min() ? false : true;
  }

  isButtonPlusDisabled(){
    return this.quantidade() < this.max() ? false : true;
  }

  onClickMinus(){
    if(this.quantidade() > this.min()){
      this.quantidadeChange.emit(this.quantidade() - 1);
    }
  }

  onClickPlus(){
    if(this.quantidade() < this.max()){
      this.quantidadeChange.emit(this.quantidade() + 1);
    }
  }

}
