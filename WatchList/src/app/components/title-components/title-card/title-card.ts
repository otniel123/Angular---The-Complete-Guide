import { Component, inject, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TitleService } from '../../../title-service';
import { DeleteTitleAlert } from "../../alert-components/delete-title-alert/delete-title-alert";

@Component({
  selector: 'app-title-card',
  imports: [FormsModule, DeleteTitleAlert],
  templateUrl: './title-card.html',
  styleUrl: './title-card.css',
})
export class TitleCard {
  titleService = inject(TitleService);

  @Input({required: true}) titleName !: string;
  @Input({required: true}) titleGener !: string;
  @Input({required: true}) titleType !: string;
  @Input({required: true}) titleYear !: string;

  willRemoveTitle: boolean = false;

  titleStatus: "want-watch" | "watching" | "watched" = "want-watch";
  
  onChangeStatus(){
    this.titleService.updateTitleStatus(this.titleName, this.titleStatus);
  }

  onChangeRating(rating: Object ){
    this.titleService.updateTitleRating(this.titleName, rating);
  }

  removeTitleCancel(){
    this.willRemoveTitle = false;
    return;
  }

  removeTitleConfirm(){
    this.willRemoveTitle = true;
    this.onClickRemoveTitle();
    return;
  }

  onClickRemoveTitle(){
    if(this.willRemoveTitle === false){
      this.willRemoveTitle = true;
      return;
    }
    this.titleService.removeTitle(this.titleName);
    return;
  }
}
