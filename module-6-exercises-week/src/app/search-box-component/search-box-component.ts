import { Component, computed, ElementRef, input, model } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box-component',
  imports: [FormsModule],
  templateUrl: './search-box-component.html',
  styleUrl: './search-box-component.css',
})
export class SearchBoxComponent {
  placeholderValue = input.required<string>();
  textValue = model.required<string>();


  isLimparButtonHidden(){
    return this.textValue().length > 0 ? false : true;
  }

  onClickLimparButton(){
    this.textValue.set('');
  }
  
}
