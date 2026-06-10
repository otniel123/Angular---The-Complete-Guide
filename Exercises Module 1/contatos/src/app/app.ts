import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactList } from "./contact-list/contact-list";
import { Section } from "./section/section";
import { ContactStats } from "./contact-stats/contact-stats";

@Component({
  selector: 'app-root',
  standalone: false,
  //imports: [RouterOutlet, ContactList, Section, ContactStats],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('contatos');
}
