import { Component, inject } from '@angular/core';
import { Contact } from '../new-contact/contact.model';
import { NewContact } from "../new-contact/new-contact";
import { UpperCasePipe, DatePipe } from '@angular/common';
import { ContactService } from '../services/contact-service/contact-service';

@Component({
  selector: 'app-contact-list',
  imports: [NewContact, UpperCasePipe, DatePipe],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  private contactService = inject(ContactService);

  get getContacts(){
    return this.contactService.getContacts;
  }

}
