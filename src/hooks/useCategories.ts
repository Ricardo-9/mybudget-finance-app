import { useEffect, useState } from "react";
import { Category } from "@/src/types/expenses";
import getCategories from "@/src/services/categoryService";

//Find and show the categories of expense
export default function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCategory();
  }, []);

  return { categories };
}
