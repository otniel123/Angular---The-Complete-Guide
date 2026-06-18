import { Component, inject } from '@angular/core';
import { TitleService } from '../../../title-service';
import { TitleModel } from '../../../model/title.model';
import { TitleCard } from "../title-card/title-card";
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-title-list',
  imports: [TitleCard, FormsModule],
  templateUrl: './title-list.html',
  styleUrl: './title-list.css',
})
export class TitleList {
  titleService = inject(TitleService);
  titleStatusFilter : "all" | "want-watch" | "watching" | "watched" = "all";

  titleListFiltered = this.titleService.getTitleListFiltered(this.titleStatusFilter);

  onStatusFilterChange(object: Object){
    this.titleListFiltered = this.titleService.getTitleListFiltered(object);
    console.log(this.titleListFiltered);
  }
}
