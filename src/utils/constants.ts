export const API_BASE_URL = 'https://fakestoreapi.com';
export const ITEMS_PER_PAGE = 8;

export const ENDPOINTS = {
  PRODUCTS: '/products',
  CATEGORIES: '/products/categories',
  PRODUCT_BY_CATEGORY: (category: string) => `/products/category/${category}`,
};