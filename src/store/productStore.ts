import { create } from 'zustand';
import { Product } from '../types/product.types';

interface ProductsStore {
    products: Product[];
    setProducts: (products: Product[]) => void;
}

export const useProductStore = create<ProductsStore>(set => ({
    products: [],
    setProducts: (updatedProducts) => set({products: updatedProducts})
}));