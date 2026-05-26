import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense-service';

@Component({
  selector: 'app-expense-summary-component',
  imports: [],
  templateUrl: './expense-summary-component.html',
  styleUrl: './expense-summary-component.css',
})
export class ExpenseSummaryComponent {
  expenseService = inject(ExpenseService);
  expensesList = this.expenseService.getExpenses();

  get getTotalAmount(){
    this.expensesList = this.expenseService.getExpenses();
    return this.expenseService.getTotal()
  }

  get getExpensesNumber(){
    this.expensesList = this.expenseService.getExpenses();
    return this.expensesList.length;
  }

  get getExpenseAmountAverage(){
    var average = 0;

    this.expensesList.map(e => average += e.amount);

    if(average === 0){
      return 0;
    }

    return average / this.expensesList.length;
  }
}
