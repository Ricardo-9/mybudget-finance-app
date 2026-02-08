export type Expense = {
  id: string;
  date: string; // ISO: "YYYY-MM-DD"
  categoryId: number;
  amount: number;
  description?: string;
};

export type FixedExpense = {
  id: string;
  paymentDayOfMonth: number;
  categoryId: number;
  amount: number;
  description?: string;
};

export type Saving = {
  id: string;
  amount: number;
  date: string; // ISO: "YYYY-MM-DD"
  note?: string;
};

export type Goal = {
  id: string;
  targetAmount: number;
  currentAmount: number;
  title: string;
};

export type Category = {
  id: string;
  name: string;
  color: string;
};

//Types for creation (POST) - We do not need the id to create a new *

export type NewExpense = Omit<Expense,"id">
export type NewFixedExpense = Omit<FixedExpense,"id">
export type NewSaving = Omit<Saving,"id">
export type NewGoal = Omit<Goal,"id">
export type NewCategory = Omit<Category,"id">