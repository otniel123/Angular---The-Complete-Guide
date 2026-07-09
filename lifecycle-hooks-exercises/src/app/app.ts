import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifeCycleComponent } from './life-cycle-component/life-cycle-component';
import { UserCardCompnent } from './user-card-compnent/user-card-compnent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LifeCycleComponent, UserCardCompnent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lifecycle-hooks-exercises');
  count: number = 0;
  willComponentAppear: boolean = true;
  isValid: boolean = true;

  onClickButton(){
    this.count = this.count + 1;
  }

  onClickChangeAppearButton(){
    this.willComponentAppear = !this.willComponentAppear;
    this.isValid = !this.isValid;
  }
}
