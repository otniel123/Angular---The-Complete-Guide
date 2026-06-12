import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-delete-title-alert',
  imports: [],
  templateUrl: './delete-title-alert.html',
  styleUrl: './delete-title-alert.css',
})
export class DeleteTitleAlert {
  @Input({required: true}) titleName !: string;
  @Output() clickConfirmButton = new EventEmitter();
  @Output() clickCancelButton = new EventEmitter();

  onClickConfirmButton(){
    this.clickConfirmButton.emit();
  }

  onClickCancelButton(){
    this.clickCancelButton.emit();
  }
}
