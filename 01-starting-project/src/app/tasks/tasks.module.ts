import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../shared/shared.module";
import { TaskComponent } from "./task/task.component";

@NgModule({
    declarations: [TasksComponent, TaskComponent, NewTaskComponent,],
    exports: [TasksComponent, TaskComponent],
    imports: [FormsModule, CommonModule, SharedModule]
})
export class TaskModule {}