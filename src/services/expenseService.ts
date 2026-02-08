import { Expense, NewExpense } from "../types/expenses";

const url = "http://localhost:5000/expenses";

export async function getExpenses(): Promise<Expense[]> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Status:${response.status}:${response.statusText}`);
    }

    const data: Expense[] = await response.json();

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function deleteExpenses(id: string): Promise<void> {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Status:${response.status}:${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function createNewExpense(expenseData: NewExpense): Promise<Expense> {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });

    if (!response.ok) {
      throw new Error(`Status:${response.status}:${response.statusText}`);
    }

    return await response.json()
  } catch (error) {
    console.error(error);
    throw error
  }
  
}

export async function updateExpenseService(
  expenseData: NewExpense,
  id: string,
): Promise<Expense> {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(expenseData),
    });

    if (!response.ok) {
      throw new Error(`Status:${response.status}:${response.statusText}`);
    }

    return await response.json()
  } catch (error) {
    console.error(error);
    throw error
  }
}

export async function getExpenseByID(id: string): Promise<Expense> {
  try {
    const response = await fetch(`${url}/${id}`);
    if (!response.ok) {
      throw new Error(`Status:${response.status}:${response.statusText}`);
    }

    const data: Expense = await response.json();

    return data;
  } catch (error) {
    console.error(error);

    throw error;
  }
}
