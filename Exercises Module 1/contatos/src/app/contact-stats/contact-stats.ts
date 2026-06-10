import { Component, inject } from '@angular/core';
import { ContactService } from '../services/contact-service/contact-service';

@Component({
  selector: 'app-contact-stats',
  standalone: false,
  templateUrl: './contact-stats.html',
  styleUrl: './contact-stats.css',
})
export class ContactStats {
  private contactService = inject(ContactService);

  get getContactServiceCount(){
    return this.contactService.getContactsCount;
  }
}
