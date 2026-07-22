import { Component, ElementRef, inject, Input } from '@angular/core';

@Component({
  selector: 'app-alert-component',
  imports: [],
  templateUrl: './alert-component.html',
  styleUrl: './alert-component.css',
  host: {
    class: 'alert',
    '[class.info]': 'getSeveridade === "info"',
    '[class.sucesso]': 'getSeveridade === "sucesso"',
    '[class.erro]': 'getSeveridade === "erro"',
     role: 'alert',
     '[attr.aria-live]': 'getAriaLive'
  }
})
export class AlertComponent {
  @Input() severidade ?: 'info' | 'sucesso' | 'erro';

  private elemento = inject(ElementRef);

  constructor(){
    console.log("Construtor")
    console.log(this.elemento.nativeElement.clientHeight)
  }

  get getSeveridade(){
    return this.severidade;
  }

  get getAriaLive(){
    return this.getSeveridade === 'erro' ? 'assertive' : 'polite';
  }

  onClickButton(){
    console.log(this.elemento.nativeElement.clientHeight)
  }
}
