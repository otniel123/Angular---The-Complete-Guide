import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-status-panel',
  imports: [],
  templateUrl: './status-panel.html',
  styleUrl: './status-panel.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatusPanel {}
