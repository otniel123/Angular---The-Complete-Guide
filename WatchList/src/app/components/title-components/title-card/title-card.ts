import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-card',
  imports: [],
  templateUrl: './title-card.html',
  styleUrl: './title-card.css',
})
export class TitleCard {
  @Input({required: true}) titleName !: string;
  @Input({required: true}) titleGener !: string;
  @Input({required: true}) titleType !: string;
  @Input({required: true}) titleYear !: string;
}
