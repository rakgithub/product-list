import { memo } from 'react';
import { useProducts } from '../../../hooks/useProducts';

export const CategoryFilterSidebar: React.FC = memo(() => {
  const { categories, selectedCategory, handleCategoryChange } = useProducts();

  return (
    <aside className="w-64 flex-shrink-0 hidden md:block">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
          <p className="text-sm text-gray-500 mt-1">Filter by product type</p>
        </div>

        <div className="space-y-2">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={() => handleCategoryChange('all')}
              className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
            />
            <span
              className={`text-sm font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'text-indigo-600'
                  : 'text-gray-700 group-hover:text-gray-900'
              }`}
            >
              All Products
            </span>
          </label>

          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-3 cursor-pointer group capitalize"
            >
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => handleCategoryChange(cat)}
                className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300"
              />
              <span
                className={`text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'text-indigo-600'
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}
              >
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
});

CategoryFilterSidebar.displayName = 'CategoryFilterSidebar';