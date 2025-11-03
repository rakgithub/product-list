import { API_BASE_URL, ENDPOINTS } from "../../utils/constants";

export const productApi = {
  getAllProducts: async () => {
    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.PRODUCTS}`);
    if (!response.ok) throw new Error('Failed to fetch products');
    return response.json();
  },

  getProductsByCategory: async (category: string) => {
    const response = await fetch(
      `${API_BASE_URL}${ENDPOINTS.PRODUCT_BY_CATEGORY(category)}`
    );
    if (!response.ok) throw new Error('Failed to fetch products by category');
    return response.json();
  },

  getCategories: async () => {
    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.CATEGORIES}`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    return response.json();
  },
};