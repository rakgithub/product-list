// src/pages/CartPage.tsx
import { Trash2, Plus, Minus, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/cartStore';

export const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCartStore();

  const subtotal = cart.reduce(
    (sum, i) => sum + i.price * (i.quantity ?? 1),
    0
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back to shopping */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 mb-6"
      >
        <ArrowLeft className="w-5 h-5" />
        Continue Shopping
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <div className="bg-white rounded-xl shadow-sm p-12 text-center">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
          <Link
            to="/"
            className="mt-4 inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Shop Now
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm p-6 flex gap-6 hover:shadow-md transition"
              >
                {/* Product Image */}
                <div className="w-28 h-28 bg-gray-200 border-2 border-dashed rounded-lg overflow-hidden flex-shrink-0">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-400 text-xs">
                      No image
                    </div>
                  )}
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-lg">{item.name}</h3>

                  {/* Product Description */}
                  {item.description && (
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      {item.description}
                    </p>
                  )}

                  <p className="text-lg font-medium text-indigo-600 mt-2">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity & Remove */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          Math.max(1, (item.quantity ?? 1) - 1)
                        )
                      }
                      className="p-1 rounded-full hover:bg-gray-100 transition"
                      disabled={(item.quantity ?? 1) <= 1}
                    >
                      <Minus className="w-4 h-4" />
                    </button>

                    <span className="w-10 text-center font-medium">
                      {item.quantity ?? 1}
                    </span>

                    <button
                      onClick={() =>
                        updateQuantity(item.id, (item.quantity ?? 1) + 1)
                      }
                      className="p-1 rounded-full hover:bg-gray-100 transition"
                    >
                      <Plus className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="ml-auto p-2 text-red-600 hover:bg-red-50 rounded-full transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition transform hover:scale-105">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};