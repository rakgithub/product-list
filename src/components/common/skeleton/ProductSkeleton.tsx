import React, { memo } from 'react';

export const ProductSkeleton = memo(() => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm animate-pulse">
    <div className="w-full h-64 bg-gray-200" />
    <div className="p-5">
      <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-4 bg-gray-200 rounded w-1/2 mb-4" />
      <div className="h-6 bg-gray-200 rounded w-1/4" />
    </div>
  </div>
));

ProductSkeleton.displayName = 'ProductSkeleton';