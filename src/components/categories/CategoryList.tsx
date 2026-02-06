"use client";

import { useEffect, useState } from "react";
import { Category } from "@/src/types/expenses";
import GetCategory from "@/src/services/categoryService";

//Find and show the categories of expense
const CategoriesList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const FetchCategory = async () => {
      try {
        const data = await GetCategory();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    FetchCategory();
  }, []);

  return (
    <div>
      {categories && categories.length > 0 ? (
        categories.map((category) => {
          return <p key={category.id}>{category.name}</p>;
        })
      ) : (
        <p>No categories registered</p>
      )}
    </div>
  );
};

export default CategoriesList;
