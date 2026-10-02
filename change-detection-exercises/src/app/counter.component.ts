import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <button (click)="increment()">Increment</button>
    <p>{{ count }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements DoCheck {

  count = 0;

  increment() {
    this.count++;
  }

  ngDoCheck() {
    console.log('Counter checked');
  }
}