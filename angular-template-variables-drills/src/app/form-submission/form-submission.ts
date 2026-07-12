import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-submission',
  imports: [FormsModule],
  templateUrl: './form-submission.html',
  styleUrl: './form-submission.css',
})
export class FormSubmission {

  onSubmit(form: HTMLFormElement){
    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;
    const password = (form.elements.namedItem('password') as HTMLInputElement).value;

    console.log(name + " " + email + " " + password);
    form.reset();
  }
}
