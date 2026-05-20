import { Component } from '@angular/core';
import { Contact } from '../new-contact/contact.model';
import { NewContact } from "../new-contact/new-contact";

@Component({
  selector: 'app-contact-list',
  imports: [NewContact],
  templateUrl: './contact-list.html',
  styleUrl: './contact-list.css',
})
export class ContactList {
  contacts: Contact[] = [];

  onAddNewContact(data: {
    name: string,
    email: string,
    phone: string
  }){

    const newContact: Contact = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      createdAt: new Date()
    }


    this.contacts.push(newContact)
    
  }

}
