import { Injectable } from '@angular/core';
import { TitleModel } from './model/title.model';

@Injectable({
  providedIn: 'root',
})
export class TitleService {
  titlesList: TitleModel[] = [];

  addTitle(titleModel: TitleModel){
    this.titlesList.push(titleModel);
    return;
  }

  get getTitleList(){
    return this.titlesList;
  }
}
