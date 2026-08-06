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
import { HoverLogDirective } from './directives/hoverLogDirective/hover-log-directive';
import { ClickLogDirective } from './directives/clickLogDirective/click-log-directive';
import { ButtonBehaviorDirective } from './directives/buttonBehaviorDirective/button-behavior-directive';
import { TemplateRefShowDirective } from './directives/templateRefShowDirective/template-ref-show-directive';
import { AlwaysShowDirective } from './directives/alwaysShowDirective/always-show-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HoverColorDirective, BorderDirective, InputDirective, ClickCounterDirective, AutoSelectDirective, 
            BlurUppercaseDirective, RoundedDirective, RandomBackgroundDirective, HoverLogDirective, ClickLogDirective,
            ButtonBehaviorDirective, TemplateRefShowDirective, AlwaysShowDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  alwaysShowAppears = false;
  protected readonly title = signal('directiveExercisesWeek');

  onClickShowOrNotDirective(){
    this.alwaysShowAppears = !this.alwaysShowAppears;
  }
}
