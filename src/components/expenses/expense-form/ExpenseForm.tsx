"use client";
import { NewExpense } from "@/src/types/expenses";
import { useState } from "react";
import CategoriesListSelect from "../../categories/selectCategorie";
import ButtonDefault from "../../ui/Button";
import InputDefault from "../../ui/Input";
import useExpenses from "@/src/hooks/useExpenses";
import { useEffect } from "react";

type ExpenseFormProps= {
mode : "create" | "update",
id: string,
initialData?: NewExpense;

}

const ExpenseForm = (props:ExpenseFormProps) => {
  const [ExpenseForm, setExpenseForm] = useState<NewExpense>(
 { description: "", amount: 0, categoryId: 0, date: ""}
);
 
  const { createExpense,updateExpense } = useExpenses();
  

  useEffect(() => {
    if (props.mode === "update" && props.initialData) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setExpenseForm(props.initialData);
    }
  }, [props.mode, props.initialData]);

  function handleDescriptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    setExpenseForm({ ...ExpenseForm, description: e.target.value });
  }

  function handleAmountChange(e: React.ChangeEvent<HTMLInputElement>) {
    setExpenseForm({ ...ExpenseForm, amount: Number(e.target.value) });
  }

  function handleCategoriesChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setExpenseForm({
      ...ExpenseForm,
      categoryId: Number(e.target.value),
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(props.mode === "create"){
      await createExpense(ExpenseForm)

    }else if(props.mode === "update" && props.id){
      await updateExpense(ExpenseForm,props.id)
    }
  }

  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <InputDefault
          id="description"
          type="text"
          onChange={handleDescriptionChange}
          value={ExpenseForm.description}
          placeholder="Insert The Description of Your Expense"
        ></InputDefault>
        <InputDefault
          id="amount"
          type="number"
          onChange={handleAmountChange}
          value={ExpenseForm.amount}
          placeholder="Insert The amount of your expense"
        ></InputDefault>
        <CategoriesListSelect
          handleOnChange={handleCategoriesChange}
          value={ExpenseForm.categoryId}
        ></CategoriesListSelect>
        <ButtonDefault type="submit">Save</ButtonDefault>
      </form>
    </div>
  );
};

export default ExpenseForm;
