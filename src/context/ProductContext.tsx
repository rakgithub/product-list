import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from 'react';
import { productApi } from '../services/api/productApi';
import { ITEMS_PER_PAGE } from '../utils/constants';
import { Product } from '../types/product.types';

interface ProductContextType {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  loading: boolean;
  hasMore: boolean;
  loadMore: () => void;
  handleCategoryChange: (category: string) => void;
  handleSearch: (query: string) => void;
}

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const useProducts = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);


  useEffect(() => {
    productApi
      .getCategories()
      .then((data: string[]) => setCategories(data))
      .catch((err: unknown) => console.error('Error fetching categories:', err));
  }, []);

  useEffect(() => {
    setLoading(true);
    const fetchProducts =
      selectedCategory === 'all'
        ? productApi.getAllProducts()
       : productApi.getProductsByCategory(selectedCategory);

    fetchProducts
      .then((data: Product[]) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error('Error fetching products:', err);
        setLoading(false);
      });
  }, [selectedCategory]);

    useEffect(() => {
      if (products.length === 0) return;

      const filtered = searchQuery
        ? products.filter((p) =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : products;

      const paginated = filtered.slice(0, page * ITEMS_PER_PAGE);
      setFilteredProducts(paginated);
      setHasMore(paginated.length < filtered.length);
    }, [products, searchQuery, page]);

    const loadMore = useCallback(() => {
      if (hasMore && !loading) {
        setLoading(true);
        setTimeout(() => {
          setPage((prev) => prev + 1);
          setLoading(false);
        }, 500);
      }
    }, [hasMore, loading]);


  const handleCategoryChange = useCallback((category: string) => {
    setLoading(true);       
    setProducts([]);
    setFilteredProducts([]); 
    setSelectedCategory(category);
    setPage(1);
    setSearchQuery('');
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setPage(1);
  }, []);

  const value: ProductContextType = {
    products: filteredProducts,
    categories,
    selectedCategory,
    searchQuery,
    loading,
    hasMore,
    loadMore,
    handleCategoryChange,
    handleSearch,
  };

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>;
};
