"use client";
import useExpenses from "@/src/hooks/useExpenses";
import ExpenseCard from "./expenseCard";

const ExpensesList = () => {
  const { expenses, removeExpense } = useExpenses();

  return (
    <div className="flex">
      {expenses.length > 0 ? (
        expenses.map((expense) => {
          return (
            <ExpenseCard
              key={expense.id}
              id={expense.id}
              date={expense.date}
              description={expense.description}
              amount={expense.amount}
              categoryId={expense.categoryId}
              onDelete={removeExpense}
            />
          );
        })
      ) : (
        <p>No Expenses registered</p>
      )}
    </div>
  );
};

export default ExpensesList;
