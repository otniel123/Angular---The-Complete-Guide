import { Component, EventEmitter, inject, Output } from '@angular/core';
import { ContactService } from '../services/contact-service/contact-service';

@Component({
  selector: 'app-new-contact',
  standalone: false,
  //imports: [FormsModule],
  templateUrl: './new-contact.html',
  styleUrl: './new-contact.css',
})
export class NewContact {

  private contactService = inject(ContactService);

  enteredName = '';
  enteredEmail = '';
  enteredPhone = '';

  onSubmitForm(){
    this.contactService.addNewContact({
      name: this.enteredName,
      email: this.enteredEmail,
      phone: this.enteredPhone,
    })

    

    this.enteredName = '';
    this.enteredEmail = '';
    this.enteredPhone = '';
  }

  get someFieldEmpty(){
    if(this.enteredName.trim().length === 0 || this.enteredEmail.trim().length === 0 || this.enteredPhone.trim().length === 0){
      return true;
    }
    return false;
  }
}
