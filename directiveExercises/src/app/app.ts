import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConsoleLogDirective } from './ConsoleLogDirective/console-log-directive';
import { HoverLogDirective } from './HoverLogDirective/hover-log-directive';
import { DoubleClickDirective } from './DoubleClickDirective/double-click-directive';
import { MessageDirective } from './MessageDirective/message-directive';
import { ClickCounterDirective } from './ClickCounterDirective/click-counter-directive';
import { TurnTextBlueDirective } from './TurnTextBlueDirective/turn-text-blue-directive';
import { FontSizeDirective } from './FontSizeDirective/font-size-directive';
import { HideElementDirective } from './HideElementDirective/hide-element-directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConsoleLogDirective, HoverLogDirective, DoubleClickDirective, MessageDirective, ClickCounterDirective, TurnTextBlueDirective, FontSizeDirective, HideElementDirective],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('directiveExercises');
}
