import { Directive, input } from '@angular/core';

@Directive({
  selector: 'button[appMessageDirective]',
  host: {
    '(click)': 'onClickShowMessage()'
  }
})
export class MessageDirective {
  message = input('Mensagem Padrão', {alias: 'appMessageDirective', transform: (value: string) => value?.trim() ? value : 'Mensagem Padrão'})

  constructor() {}

  onClickShowMessage(){
    console.log(this.message());
  }
}
