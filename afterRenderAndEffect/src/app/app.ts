import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutoFocusComponent } from "./auto-focus-component/auto-focus-component";
import { PanelComponent } from "./panel-component/panel-component";
import { MeasureComponent } from "./measure-component/measure-component";
import { GrowingBoxComponent } from "./growing-box-component/growing-box-component";
import { ThemeComponent } from "./theme-component/theme-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AutoFocusComponent, PanelComponent, MeasureComponent, GrowingBoxComponent, ThemeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('afterRenderAndEffect');
}
