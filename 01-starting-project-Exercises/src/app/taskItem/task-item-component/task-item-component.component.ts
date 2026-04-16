import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-item-component',
  standalone: true,
  imports: [],
  templateUrl: './task-item-component.component.html',
  styleUrl: './task-item-component.component.css'
})
export class TaskItemComponentComponent {

  isTaskCompleted: boolean = false;

  @Input({required: true}) title !: string;
  @Input({required: true}) priority !: 'low' | 'medium' | 'high';
  @Input() description?: string = "Sem descrição";
  @Input() dueDate?: string;
  @Input() assignee?: string = "Não atribuído";

  onClickCompleteButton(){
    this.isTaskCompleted = !this.isTaskCompleted;
  }

  get getPriority(){
    return this.priority;
  }
}
