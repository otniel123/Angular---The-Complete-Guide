import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from './contact.model';

@Component({
  selector: 'app-new-contact',
  imports: [FormsModule],
  templateUrl: './new-contact.html',
  styleUrl: './new-contact.css',
})
export class NewContact {

  @Output() emitContact = new EventEmitter();

  enteredName = '';
  enteredEmail = '';
  enteredPhone = '';

  onSubmitForm(){
    this.emitContact.emit({
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
