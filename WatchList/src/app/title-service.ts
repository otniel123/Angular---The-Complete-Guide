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

  removeTitle(titlename: string){
    this.titlesList = this.titlesList.filter(t => t.name !== titlename);
  }

  updateTitleStatus(titleName: string, titleStatus: "want-watch" | "watching" | "watched"){
    this.titlesList.filter(t => t.name === titleName).forEach(t => t.status = titleStatus);
    return;
  }

  updateTitleRating(titleName: string, titleRating : 0 | 1 | 2 | 3 | 4 | 5 | Object = 0){
    this.titlesList.filter(t => t.name === titleName).forEach(t => t.rating = titleRating);
    console.log(this.titlesList);
    return
  }

  getTitleListFiltered(object: Object){
    switch (object){
      case "want-watch":
        return this.titlesList.filter(t => t.status === "want-watch");
      case "watched":
        return this.titlesList.filter(t => t.status === "watched");
      case "watching":
        return this.titlesList.filter(t => t.status === "watching");
      default:
        return this.getTitleList;
    }
  }

  get getTitleList(){
    return this.titlesList;
  }
}
