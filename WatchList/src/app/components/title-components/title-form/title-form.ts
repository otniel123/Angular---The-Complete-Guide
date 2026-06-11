import { Component, inject } from '@angular/core';
import { TitleModel } from '../../../model/title.model';
import { FormsModule } from '@angular/forms';
import { TitleService } from '../../../title-service';

@Component({
  selector: 'app-title-form',
  imports: [FormsModule],
  templateUrl: './title-form.html',
  styleUrl: './title-form.css',
})
export class TitleForm {

  titleService = inject(TitleService);

  title : TitleModel = {
    name: "",
    gener: "",
    year: "",
    type: "",
    status: "want-watch",
    rating: 0
  };

  onClickAddTitle(){
    this.titleService.addTitle(this.title);
    this.title  = {
      name: "",
      gener: "",
      year: "",
      type: "",
      status: "want-watch",
      rating: 0
    };
    return;
  }
}
