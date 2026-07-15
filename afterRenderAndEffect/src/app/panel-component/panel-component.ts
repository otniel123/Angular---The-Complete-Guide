import { AfterContentInit, Component, contentChildren, ElementRef } from '@angular/core';

@Component({
  selector: 'app-panel-component',
  imports: [],
  templateUrl: './panel-component.html',
  styleUrl: './panel-component.css',
})
export class PanelComponent implements AfterContentInit{
  item = contentChildren<ElementRef>('item');

  ngAfterContentInit(): void {
    alert("Itens projetados: " + this.item().length)
  }
}
