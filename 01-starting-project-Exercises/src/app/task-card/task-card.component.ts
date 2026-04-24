import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../task-board/models/Tasks';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.css'
})
export class TaskCardComponent {
  @Input({required: true}) task !: Task;
  
}
