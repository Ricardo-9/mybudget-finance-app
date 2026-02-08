'use client'
import ExpenseForm from "@/src/components/expenses/expense-form/ExpenseForm";
import useExpense from "@/src/hooks/useExpense";
import { useParams } from "next/navigation";
export default function EditExpense() {
    const params = useParams()
    const id = String(params.id)
    const expense = useExpense(id);

  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm mode="update" id={id} initialData={expense}></ExpenseForm>
      <p></p>
    </div>
  );
}
