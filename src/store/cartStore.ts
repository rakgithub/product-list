import { create } from 'zustand';
import { Product } from '../types/product.types';

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (id: number, newQuantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({cart: [...state.cart, product]})),
  removeFromCart: (productId) => set((state) => ({cart: state.cart.filter((p) => p.id !== productId)})),
  clearCart: () => set({cart: []}),
  updateQuantity: (id, newQuantity) => set(state => {
    return {
      cart: state.cart.map(i => i.id === id ? {
        ...i, quantity : newQuantity
      }: i)
    }
  })
}));