import { useEffect, useState } from "react";
import { Expense } from "@/src/types/expenses";
import { getExpense } from "@/src/services/expenseService";

//Find and show the expenses
export default function useExpenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const fetchExpense = async () => {
      try {
        const data = await getExpense();
        setExpenses(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchExpense();
  }, []);

  return { expenses };
}
