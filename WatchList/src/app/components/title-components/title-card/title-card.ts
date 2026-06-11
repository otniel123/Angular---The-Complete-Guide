import { Component, inject, Input } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { TitleService } from '../../../title-service';

@Component({
  selector: 'app-title-card',
  imports: [FormsModule],
  templateUrl: './title-card.html',
  styleUrl: './title-card.css',
})
export class TitleCard {
  titleService = inject(TitleService);

  @Input({required: true}) titleName !: string;
  @Input({required: true}) titleGener !: string;
  @Input({required: true}) titleType !: string;
  @Input({required: true}) titleYear !: string;

  titleStatus: "want-watch" | "watching" | "watched" = "want-watch";
  
  onChangeStatus(){
    this.titleService.updateTitleStatus(this.titleName, this.titleStatus);
  }

  onChangeRating(rating: Object ){
    this.titleService.updateTitleRating(this.titleName, rating);
  }
}
