import { Component, model, signal } from '@angular/core';
import { ButtonComponent } from '../button-component/button-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-class-div',
  imports: [ButtonComponent, FormsModule],
  templateUrl: './dynamic-class-div.html',
  styleUrl: './dynamic-class-div.css',
})
export class DynamicClassDiv {
  isActive = signal(true);
  status : "undefined" | "success" | "warning" | "error" = "undefined";

  progress = model(0);

  onClickButton(){
    this.isActive.set(!this.isActive());
  }

  get isSuccess(){
    return this.status === "success";
  }

  get isWarning(){
    return this.status === "warning";
  }

  get isError(){
    return this.status === "error"
  }
}
