import { ChangeDetectionStrategy, Component, DoCheck } from "@angular/core";

@Component({
  selector: 'app-list',
  template: `
    <p>List</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements DoCheck {

  ngDoCheck() {
    console.log('List checked');
  }
}