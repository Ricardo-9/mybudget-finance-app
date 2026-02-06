"use client";
import useExpenses from "@/src/hooks/useExpenses";

//Find and show the expenses
const ExpensesList = () => {
  const { expenses } = useExpenses();

  return (
    <div>
      {expenses.length > 0 ? (
        expenses.map((expense) => {
          return (
            <div key={expense.id}>
              <h2>{expense.description}</h2>
              <p>
                <span>Category = </span>
                {expense.categoryId}
              </p>
              <p>
                <span>Date = </span>
                {expense.date}
              </p>
            </div>
          );
        })
      ) : (
        <p>No Expenses registered</p>
      )}
    </div>
  );
};

export default ExpensesList;
