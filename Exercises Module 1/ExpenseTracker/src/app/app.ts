import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./components/card-component/card-component";
import { NewExpenseComponent } from "./components/new-expense-component/new-expense-component";
import { ExpenseSummaryComponent } from "./components/expense-summary-component/expense-summary-component";
import { ExpenseListComponent } from "./components/expense-list-component/expense-list-component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, NewExpenseComponent, ExpenseSummaryComponent, ExpenseListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ExpenseTracker');
}
