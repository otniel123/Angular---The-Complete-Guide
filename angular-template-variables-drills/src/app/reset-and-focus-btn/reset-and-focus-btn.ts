import { Component } from '@angular/core';

@Component({
  selector: 'app-reset-and-focus-btn',
  imports: [],
  templateUrl: './reset-and-focus-btn.html',
  styleUrl: './reset-and-focus-btn.css',
})
export class ResetAndFocusBtn {

  onClickResetButton(input: HTMLInputElement){
    input.value = '';
  }
  
  onClickFocusButton(input: HTMLInputElement){
    input.focus();
  }
}
