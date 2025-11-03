import React, { memo, ChangeEvent } from 'react';
import { Search } from 'lucide-react';
import { useProducts } from '../../../context/ProductContext';

export const SearchBar: React.FC = memo(() => {
  const { searchQuery, handleSearch } = useProducts();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleSearch(e.target.value);
  };

  return (
    <div className="relative max-w-md w-full">
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleChange}
        className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
      />
    </div>
  );
});

SearchBar.displayName = 'SearchBar';
