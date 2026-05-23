import { Injectable } from '@angular/core';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private expenses: Expense[] = [];
  private STORAGE_KEY = 'expenses_array';

  constructor(){
    this.loadFromStorage();
  }

  loadFromStorage(){
    const data = localStorage.getItem(this.STORAGE_KEY);
    if(data){
      this.expenses = JSON.parse(data);
      return;
    }
    this.expenses = [];
  }

  private saveToStorage(){
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.expenses));
  }

  getExpenses(){
    return this.expenses;
  }

  getTotal(){
    var total: number = 0;
    this.expenses.forEach(function(expense){
      total += expense.amount;
    })
    return total;
  }

  getByCategory(category: string){
    const expensesByCategory: Expense[] = this.expenses.filter(expense => expense.category === category);
    return expensesByCategory;
  }

  addExpense(data: {id: string, description: string, amount: number,
    category: 'food' | 'transport' | 'entertainment' | 'bills' | 'other',
    date: Date}){

    const newExpense: Expense = {
      id: data.id,
      description: data.description,
      amount: data.amount,
      category: data.category,
      date: data.date
    }


    this.expenses.push(data);
    this.saveToStorage();
  }

  removeExpense(id: string){
    this.expenses = this.expenses.filter(expense => expense.id != id);
    this.saveToStorage();
  }
}
