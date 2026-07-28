import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button-component/button-component';
import { DynamicClassDiv } from "./dynamic-class-div/dynamic-class-div";
import { AlertComponent } from "./alert-component/alert-component";
import { QuantityPickerComponent } from "./quantity-picker-component/quantity-picker-component";
import { SearchBoxComponent } from "./search-box-component/search-box-component";
import { H4Component } from "./h4-component/h4-component";
import { FullNameExercise } from './full-name-exercise/full-name-exercise';

@Component({
  selector: 'app-root',
  imports: [DynamicClassDiv, AlertComponent, QuantityPickerComponent, SearchBoxComponent, H4Component, FullNameExercise],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('module-6-exercises-week');

  quantidade = 2;
  min = 0
  max = 10;
  text = '';
  
  quntidadeExpandida(novaQuantidade: number){
    this.quantidade = novaQuantidade;
  }

  onClick(){
    alert(this.text)
  }
}
