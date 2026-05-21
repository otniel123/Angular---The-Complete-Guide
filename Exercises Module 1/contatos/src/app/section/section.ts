import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-section',
  imports: [FormsModule],
  templateUrl: './section.html',
  styleUrl: './section.css',
})
export class Section {
  @Input({required: true}) title !: string;
  @Input() color: string = '#3B82F6';
}
