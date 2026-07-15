import { afterNextRender, Component, ElementRef, viewChild } from '@angular/core';

@Component({
  selector: 'app-measure-component',
  imports: [],
  templateUrl: './measure-component.html',
  styleUrl: './measure-component.css',
})
export class MeasureComponent {
  input = viewChild.required<ElementRef<HTMLInputElement>>('inputTeste');

  constructor(){
    alert("construtor");
    afterNextRender(() =>{
      alert("this.input()?.nativeElement.value");
    })
  }

  onClickButton(){
    this.input().nativeElement.value = 'dadada';

  }
}
