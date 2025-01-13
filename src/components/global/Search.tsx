import React, { useState } from "react";

interface SearchProps {
  placeholder?: string;
  onSearch: (searchTerm: string) => void;
  className?: string;
}

const Search: React.FC<SearchProps> = ({ placeholder = "Search...", onSearch, className }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div
      className={`flex items-center bg-customGray rounded-lg py-1 shadow-md transition-all ${className}`}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 px-3 py-2 rounded-lg text-gray-700 outline-none bg-transparent placeholder-gray-500 focus:outline-customGrayBold focus:outline-customGrayBold sm:text-sm"
      />
    </div>
  );
};

export default Search;
