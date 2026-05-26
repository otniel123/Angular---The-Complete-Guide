import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { NgTemplateOutlet } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-expense-component',
  imports: [NgTemplateOutlet, FormsModule],
  templateUrl: './new-expense-component.html',
  styleUrl: './new-expense-component.css',
})
export class NewExpenseComponent {
  private expenseService = inject(ExpenseService);

  enteredDescription: string = '';
  enteredValue: number = 0;
  enteredCategory !: 'food' | 'transport' | 'entertainment' | 'bills' | 'other';

  onSubmitForm(){
    const data = {description: this.enteredDescription, amount: this.enteredValue, category: this.enteredCategory};

    this.expenseService.addExpense(data);

    this.enteredDescription = '';
    this.enteredValue = 0;
  }
}
