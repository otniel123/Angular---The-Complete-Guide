import { AfterContentInit, Component, contentChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card-component',
  imports: [FormsModule],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})
export class CardComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log("Content child " + this.title()?.nativeElement.textContent);
  }
  title = contentChild<ElementRef<HTMLElement>>('cardTitle');
}
