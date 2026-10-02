import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";
import { CounterComponent } from "./counter.component";
import { ListComponent } from "./list.component";

@Component({
  selector: 'app-main',
  template: `
    <app-counter />
    <app-list />
  `,
  imports: [CounterComponent, ListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements DoCheck {
  ngDoCheck() {
    console.log('Main checked');
  }
}