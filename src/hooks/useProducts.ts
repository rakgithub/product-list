import { useState, useEffect, useCallback, useMemo } from 'react';
import { productApi } from '../services/api/productApi';
import { ITEMS_PER_PAGE } from '../utils/constants';
import { Category, Product } from '../types/product.types';

interface UseProductsReturn {
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

export const useProducts = (): UseProductsReturn => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    productApi
      .getCategories()
      .then(setCategories)
      .catch((err) => console.error('Error fetching categories:', err));
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchProducts =
      selectedCategory === 'all'
        ? productApi.getAllProducts()
        : productApi.getProductsByCategory(selectedCategory);

    fetchProducts
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, [selectedCategory]);

  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;
    
    const query = searchQuery.toLowerCase();
    return products.filter((product) =>
      product.title.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  const paginatedProducts = useMemo(() => {
    return filteredProducts.slice(0, page * ITEMS_PER_PAGE);
  }, [filteredProducts, page]);

  const hasMore = useMemo(() => {
    return paginatedProducts.length < filteredProducts.length;
  }, [paginatedProducts.length, filteredProducts.length]);

  const loadMore = useCallback(() => {
    if (hasMore && !loading) {
      setPage((prev) => prev + 1);
    }
  }, [hasMore, loading]);

  const handleCategoryChange = useCallback((category: string) => {
    setProducts([]);
    setLoading(true);
    setSelectedCategory(category);
    setPage(1);
    setSearchQuery('');
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setPage(1);
  }, []);

  return {
    products: paginatedProducts,
    categories,
    selectedCategory,
    searchQuery,
    loading,
    hasMore,
    loadMore,
    handleCategoryChange,
    handleSearch,
  };
};