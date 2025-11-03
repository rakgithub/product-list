import { ShoppingBag } from 'lucide-react';
import { SearchBar } from '../common/searchBar/SearchBar';
import { CategoryFilter } from '../common/categoryFilter/CategoryFilter';

export const Header = () => (
  <header className="bg-white shadow-sm sticky top-0 z-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <ShoppingBag className="w-8 h-8 text-indigo-600" />
          <h1 className="text-3xl font-bold text-gray-900">Product List</h1>
        </div>
        <SearchBar />
      </div>
      <CategoryFilter />
    </div>
  </header>
);