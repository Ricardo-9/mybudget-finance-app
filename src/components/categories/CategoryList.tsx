"use client";

import useCategories from "@/src/hooks/useCategories";

//Find and show the categories of expense
const CategoriesList = () => {
  const { categories } = useCategories();

  return (
    <div>
      {categories.length > 0 ? (
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
