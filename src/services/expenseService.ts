;
import { Expense ,NewExpense} from "../types/expenses";
export async function getExpense(): Promise<Expense[]> {
  const response = await fetch("http://localhost:5000/expenses");

  const data: Expense[] = await response.json();

  console.log(data);

  return data;
}

export async function deleteExpense(id: number) {
  try {
    fetch(`http://localhost:5000/expenses/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "json/application",
      },
    });
  } catch (error) {
    console.log(error);
  }
}

export async function createNewExpense(expenseData:NewExpense ) {
  try {
    await fetch(`http://localhost:5000/expenses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      
      },
      body: JSON.stringify(expenseData)
    });

    console.log("created")
  } catch (error) {
    console.log(error);
  }
}
