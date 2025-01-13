import React, { useState } from "react";

interface CategoryProps {
  options: string[];
  onFilterChange: (selectedCategory: string) => void;
  className?: string;
}

const Category: React.FC<CategoryProps> = ({ options, onFilterChange, className }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelectedCategory(value);
    onFilterChange(value);
  };

  return (
    <div
      className={`flex items-center bg-customGray rounded-lg py-1 shadow-md transition-all ${className}`}
    >
      <select
        id="category"
        value={selectedCategory}
        onChange={handleChange}
        className="flex-1 px-3 py-2 rounded-lg text-gray-700 outline-none bg-transparent placeholder-gray-500 sm:text-sm"
      >
        <option value="">Choose Category</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Category;
