import { Injectable } from '@angular/core';
import { Contact } from '../../new-contact/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];
  private STORAGE_KEY = 'angular_contacts';

  constructor(){
    this.loadFromStorage()
  }

  private loadFromStorage(){
    const data = localStorage.getItem(this.STORAGE_KEY);
    if(data){
      this.contacts = JSON.parse(data);
      return;
    }
    this.contacts = [];
  }

  private saveToStorage(){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.contacts));
  }

  get getContacts(){
    return this.contacts;
  }

  addNewContact(data: {name: string, email: string,phone: string}){

    const newContact: Contact = {
      id: crypto.randomUUID(),
      name: data.name,
      email: data.email,
      phone: data.phone,
      createdAt: new Date()
    }


    this.contacts.push(newContact)
    this.saveToStorage();
  }

  removeContact(id: string){
    this.contacts = this.contacts.filter(c => c.id !== id);
    this.saveToStorage()
  }

  get getContactsCount(){
    return this.contacts.length;
  }
}
