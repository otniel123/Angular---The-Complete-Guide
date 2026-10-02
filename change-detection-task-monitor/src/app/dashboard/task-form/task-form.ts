import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-task-form',
  imports: [],
  templateUrl: './task-form.html',
  styleUrl: './task-form.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskForm {}
