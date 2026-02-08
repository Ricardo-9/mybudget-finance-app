import { useEffect, useState } from "react";
import { Expense } from "../types/expenses";
import { getExpenseByID } from "../services/expenseService";

export default function useExpense(id: string) {
  const [expense, setExpense] = useState<Expense>();
  useEffect(() => {
    async function getExpenseData():Promise<void> {
      try {
        const data = await getExpenseByID(id);
        setExpense(data);
      } catch (error) {
        console.error(error);
      }
    }

    getExpenseData();
  }, [id]);

  return expense  ;
}
