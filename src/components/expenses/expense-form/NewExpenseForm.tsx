"use client";
import { createNewExpense } from "@/src/services/expenseService";
import { NewExpense } from "@/src/types/expenses";
import { useState } from "react";
import CategoriesListSelect from "../../categories/selectCategorie";

const CreateExpenseForm = () => {
  const [newExpenseForm, setNewExpenseForm] = useState<NewExpense>({
    description: "",
    amount: 0,
    categoryId: 0,
    date: "",
  });

  function handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewExpenseForm({ ...newExpenseForm, description: e.target.value });
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewExpenseForm({ ...newExpenseForm, amount: Number(e.target.value) });
  }

  function handleCategoriesChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setNewExpenseForm({
      ...newExpenseForm,
      categoryId: Number(e.target.value),
    });
  }

  async function handleSubmit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    try {
      await createNewExpense(newExpenseForm);
      console.log("submited");
      setNewExpenseForm({
        description: "",
        amount: 0,
        categoryId: 0,
        date: "",
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          onChange={handleDescriptionChange}
          value={newExpenseForm.description}
        ></input>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          onChange={handleAmountChange}
          value={newExpenseForm.amount}
        ></input>
        <CategoriesListSelect
          handleOnChange={handleCategoriesChange}
          value={newExpenseForm.categoryId}
        ></CategoriesListSelect>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CreateExpenseForm;
