import ExpenseForm from "@/src/components/expenses/expense-form/ExpenseForm";

export default function newExpenses() {
  return (
    <div>
      <h1>New Expense</h1>
      <ExpenseForm mode="create" id=""></ExpenseForm>
    </div>
  );
}
