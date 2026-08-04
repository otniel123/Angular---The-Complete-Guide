import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HoverColorDirective } from './directives/hoverColorDirective/hover-color-directive';
import { BorderDirective } from './directives/borderDirective/border-directive';
import { InputDirective } from './directives/inputDirective/input-directive';
import { ClickCounterDirective } from './directives/clickCounterDirective/click-counter-directive';
import { AutoSelectDirective } from './directives/autoSelectDirective/auto-select-directive';
import { BlurUppercaseDirective } from './directives/blurUppercaseDirective/blur-uppercase-directive';
import { RoundedDirective } from './directives/roundedDirective/rounded-directive';
import { RandomBackgroundDirective } from './directives/randomBackgroundDirective/random-background-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HoverColorDirective, BorderDirective, InputDirective, ClickCounterDirective, AutoSelectDirective, BlurUppercaseDirective, RoundedDirective, RandomBackgroundDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directiveExercisesWeek');
}
