import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent],
    exports: [TaskComponent]
})
export class TaskModule {}