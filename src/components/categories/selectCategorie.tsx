"use client";

import useCategories from "@/src/hooks/useCategories";

type CategoriesListSelectProps = {
  handleOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value: number;
};

const CategoriesListSelect = ({
  handleOnChange,
}: CategoriesListSelectProps) => {
  const { categories } = useCategories();
  return (
    <select onChange={handleOnChange}>
      {categories.map((category) => {
        return (
          
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
          
        );
      })}
    </select>
  );
};

export default CategoriesListSelect;
