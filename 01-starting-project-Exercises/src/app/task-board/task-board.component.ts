import { Component, Input } from '@angular/core';
import { Task } from './models/Tasks';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-board',
  standalone: true,
  imports: [TaskCardComponent],
  templateUrl: './task-board.component.html',
  styleUrl: './task-board.component.css'
})
export class TaskBoardComponent {
  tasks: Task[] = [
    {id: '1', title: 'Task 1', priority: 'high', completed: true},
    {id: '2', title: 'Task 2', priority: 'low', completed: false},
    {id: '3', title: 'Task 3', priority: 'medium', completed: true},
    {id: '4', title: 'Task 4', priority: 'high', completed: false},
    {id: '5', title: 'Task 5', priority: 'medium', completed: false},
  ]

  @Input({required: true})activeFilter: 'all' | 'completed' | 'pending' = 'all';

  filteredTasks(){
    if(this.activeFilter == 'completed'){return this.tasks.filter(t => t.completed==true)}
    else if(this.activeFilter == 'pending'){return this.tasks.filter(t => !t.completed)}
    return this.tasks;
  }

  get hasTasks(){
    return this.filteredTasks().length > 0;
  }
}
