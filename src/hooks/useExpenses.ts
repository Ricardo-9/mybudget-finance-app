import { useEffect, useState } from "react";
import { Expense, NewExpense } from "@/src/types/expenses";
import { getExpenses } from "@/src/services/expenseService";
import { deleteExpenses } from "@/src/services/expenseService";
import { createNewExpense } from "@/src/services/expenseService";
import { updateExpenseService } from "@/src/services/expenseService";
import { useRouter } from "next/navigation";
//Find and show the expenses
export default function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const router = useRouter()
  useEffect(() => {
    async function fetchExpense() {
      try {
        const data = await getExpenses();
        setExpenses(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchExpense();
  }, []);

  async function removeExpense(id: string): Promise<void> {
    try {
      await deleteExpenses(id);
      setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  async function createExpense(expenseForm:NewExpense): Promise<void> {
    try {
      const newExpense = await createNewExpense(expenseForm);
      setExpenses(prev => [...prev, newExpense]);
      router.push("/onboarding/expenses")
    } catch (error) {
      console.error(error);
    }
  }

  async function updateExpense(expenseForm:NewExpense,id:string): Promise<void> {
    try {
      const updatedExpense = await updateExpenseService(expenseForm,id);
       setExpenses(prev => 
      prev.map(expense => 
        expense.id === id ? updatedExpense : expense
      )
    );
      router.push("/onboarding/expenses")
    } catch (error) {
      console.error(error);
    }
  }

  

  return { expenses, removeExpense,createExpense ,updateExpense};
}
