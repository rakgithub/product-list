
import React, { memo } from 'react';
import { Product } from '../../../types/product.types';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = memo(({ product }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
    <div className="relative w-full h-64 bg-gray-50 flex items-center justify-center p-6 overflow-hidden">
      {product.image ? (
        <img
          src={product.image}
          alt={product.title}
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      ) : (
        <div className="text-gray-400 text-sm">No Image</div>
      )}
    </div>
    <div className="p-5">
      <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 h-10">
        {product.title}
      </h3>
      <p className="text-xs text-gray-500 mb-3 capitalize">{product.category}</p>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
));

ProductCard.displayName = 'ProductCard';
