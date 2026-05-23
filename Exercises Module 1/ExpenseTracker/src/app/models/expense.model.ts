export interface Expense {
    id: string;
    description: string;
    amount: number;
    category: 'food' | 'transport' | 'entertainment' | 'bills' | 'other';
    date: Date;
}