import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';
import { CurrencyPipe } from '@angular/common';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-expense-list-component',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './expense-list-component.html',
  styleUrl: './expense-list-component.css',
})
export class ExpenseListComponent {
  expenseService = inject(ExpenseService);
  expensesList = this.expenseService.getExpenses();

  onClickRemoveExpenseButton(id: string){
    this.expenseService.removeExpense(id);
    this.expensesList = this.expenseService.getExpenses();
  }
}
