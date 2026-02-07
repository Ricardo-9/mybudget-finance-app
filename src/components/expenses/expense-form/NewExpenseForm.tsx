"use client";
import { createNewExpense } from "@/src/services/expenseService";
import { NewExpense } from "@/src/types/expenses";
import { useState } from "react";
import CategoriesListSelect from "../../categories/selectCategorie";
import ButtonDefault from "../../ui/Button";
import InputDefault from "../../ui/Input";

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
      setNewExpenseForm(
        {
    description: "",
    amount: 0,
    categoryId: 0,
    date: "",
  }
      )
      console.log("submited");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputDefault
          id="description"
          type="text"
          onChange={handleDescriptionChange}
          value={newExpenseForm.description}
          placeholder="Insert The Description of Your Expense"
        ></InputDefault>
        <InputDefault
          id="amount"
          type="number"
          onChange={handleAmountChange}
          value={newExpenseForm.amount}
          placeholder="Insert The amount of your expense"
        ></InputDefault>
        <CategoriesListSelect
          handleOnChange={handleCategoriesChange}
          value={newExpenseForm.categoryId}
        ></CategoriesListSelect>
        <ButtonDefault type="submit">Create New Expense</ButtonDefault>
      </form>
    </div>
  );
};

export default CreateExpenseForm;
