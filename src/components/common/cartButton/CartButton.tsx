import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '../../../store/cartStore';
import { Link } from 'react-router-dom';

export const CartButton: React.FC = () => {
  const cart = useCartStore(state => state.cart);
  const count = cart.length;
  return (
    <Link
    to="/cart"
    className="relative p-2 rounded-full hover:bg-gray-100 transition"
  >
    <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-indigo-600 transition" />
    {count > 0 && (
      <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md animate-pulse">
        {count > 99 ? '99+' : count}
      </span>
    )}
  </Link>
  );
};