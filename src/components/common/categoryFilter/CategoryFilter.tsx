import React, { memo } from 'react';
import { useProducts } from '../../../context/ProductContext';

export const CategoryFilter: React.FC = memo(() => {
  const { categories, selectedCategory, handleCategoryChange } = useProducts();

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => handleCategoryChange('all')}
        className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${
          selectedCategory === 'all'
            ? 'bg-indigo-600 text-white shadow-md'
            : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
        }`}
      >
        All Products
      </button>

      {categories.map((cat: string) => (
        <button
          key={cat}
          onClick={() => handleCategoryChange(cat)}
          className={`px-5 py-2.5 rounded-lg font-medium text-sm capitalize transition-all ${
            selectedCategory === cat
              ? 'bg-indigo-600 text-white shadow-md'
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
});

CategoryFilter.displayName = 'CategoryFilter';
