import { memo } from 'react';
import { ShoppingBag } from 'lucide-react';
import { useProducts } from '../../../context/ProductContext';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { ProductSkeleton } from '../../common/skeleton/ProductSkeleton';
import { ProductCard } from '../productCard/ProductCard';

export const ProductGrid = memo(() => {
  const { products, loading, hasMore, loadMore } = useProducts();
  const lastElementRef = useInfiniteScroll(loadMore, hasMore, loading);

  if (loading && products.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
        <p className="text-gray-400">Try adjusting your search or filter</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <div ref={lastElementRef} key={product.id}>
                <ProductCard product={product} />
              </div>
            );
          }
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
          {[...Array(4)].map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      )}
    </>
  );
});

ProductGrid.displayName = 'ProductGrid';