import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box-component',
  imports: [FormsModule],
  templateUrl: './search-box-component.html',
  styleUrl: './search-box-component.css',
})
export class SearchBoxComponent {
  searchedInformation !: string;
  search = output<string>();

  onClickSearchButton(){
    this.search.emit(this.searchedInformation);
  }
}
