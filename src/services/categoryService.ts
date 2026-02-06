import { Category } from "../types/expenses";
export default async function GetCategory(): Promise<Category[]> {
  const response = await fetch("http://localhost:5000/categories");

  const data: Category[] = await response.json();

  console.log(data)

  return data;
}
