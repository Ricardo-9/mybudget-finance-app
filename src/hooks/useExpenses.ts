import { useEffect, useState } from "react";
import { Expense } from "@/src/types/expenses";
import { getExpenses } from "@/src/services/expenseService";
import { deleteExpenses } from "@/src/services/expenseService";
//Find and show the expenses
export default function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    async function fetchExpense() {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchExpense();
  }, []);

  async function removeExpense(id: number): Promise<void> {
    try {
      await deleteExpenses(id);
      setExpenses((prev) => prev.filter((expense) => expense.id !== id));
      console.log("deleted");
    } catch (error) {
      console.log(error);
    }
  }

  return { expenses, removeExpense };
}
