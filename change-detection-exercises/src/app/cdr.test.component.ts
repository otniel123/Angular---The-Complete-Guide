import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck } from "@angular/core";

@Component({
  selector: 'app-cdr-test',
  template: `
    <p>Count: {{ count }}</p>

    <button (click)="updateWithoutAnything()">
      Update
    </button>

    <button (click)="mark()">
      markForCheck
    </button>

    <button (click)="detect()">
      detectChanges
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdrTestComponent implements DoCheck {

  count = 0;

  constructor(private cdr: ChangeDetectorRef) {}

  updateWithoutAnything() {
    this.count++;
  }

  mark() {
    this.count++;
    this.cdr.markForCheck();
  }

  detect() {
    this.count++;
    this.cdr.detectChanges();
  }

  ngDoCheck() {
    console.log('CDR component checked');
  }
}