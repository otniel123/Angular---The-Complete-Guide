import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-counter-panel',
  imports: [],
  templateUrl: './counter-panel.html',
  styleUrl: './counter-panel.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterPanel {}
