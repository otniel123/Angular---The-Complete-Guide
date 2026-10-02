import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";

@Component({
  selector: 'app-header',
  template: `
    
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements DoCheck {
  ngDoCheck() {
    console.log('Header checked');
  }
}