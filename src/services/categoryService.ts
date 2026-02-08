import { Category } from "../types/expenses";

const url = "http://localhost:5000/categories";
export default async function GetCategories(): Promise<Category[]> {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Status:${response.status}:${response.statusText}`);
    }

    const data: Category[] = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
