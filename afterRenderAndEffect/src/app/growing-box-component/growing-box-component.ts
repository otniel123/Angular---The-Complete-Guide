import { afterEveryRender, Component, signal } from '@angular/core';

@Component({
  selector: 'app-growing-box-component',
  imports: [],
  templateUrl: './growing-box-component.html',
  styleUrl: './growing-box-component.css',
})
export class GrowingBoxComponent {
  qtd = signal(0);

  constructor(){
    afterEveryRender(() =>{
      console.log("Número de elementos criados: " + this.qtd())
    })
  }

  items = () => Array.from({ length: this.qtd() }, (_, i) => i + 1);

  onClickButton(){
    this.qtd.set(this.qtd() + 1);
  }
}
