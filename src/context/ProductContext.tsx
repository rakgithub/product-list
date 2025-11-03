import React, { createContext, useContext, ReactNode } from 'react';
import { useProducts as useProductsHook } from '../hooks/useProducts';
import { Category, Product } from '../types/product.types';

interface ProductContextType {
  products: Product[];
  categories: Category[];
  selectedCategory: string;
  searchQuery: string;
  loading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  handleCategoryChange: (category: string) => void;
  handleSearch: (query: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within ProductProvider');
  }
  return context;
};

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const productData = useProductsHook();
  return (
    <ProductContext.Provider value={productData}>
      {children}
    </ProductContext.Provider>
  );
};