import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-theme-component',
  imports: [],
  templateUrl: './theme-component.html',
  styleUrl: './theme-component.css',
})
export class ThemeComponent {
  dark = signal(false);

  constructor(){
    effect(() =>{
      document.body.classList.toggle('dark', this.dark());
    })
  }

  onClickButtonTheme(){
    this.dark.set(!this.dark());
  }
}
