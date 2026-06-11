import { Component, inject } from '@angular/core';
import { TitleService } from '../../../title-service';
import { TitleModel } from '../../../model/title.model';
import { TitleCard } from "../title-card/title-card";

@Component({
  selector: 'app-title-list',
  imports: [TitleCard],
  templateUrl: './title-list.html',
  styleUrl: './title-list.css',
})
export class TitleList {
  titleService: TitleService = inject(TitleService);

  titleList: TitleModel[] = this.titleService.getTitleList;
}
