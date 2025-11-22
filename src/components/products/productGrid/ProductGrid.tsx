import { memo } from 'react';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { ProductSkeleton } from '../../common/skeleton/ProductSkeleton';
import { ProductCard } from '../productCard/ProductCard';
import { EmptyProducts } from '../emptyProducts/EmptyProducts';
import { useProducts } from '../../../hooks/useProducts';

export const ProductGrid = memo(() => {
  const { products, loading, hasMore, loadMore, handleAddToCart } = useProducts();
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
      <EmptyProducts />
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product, index) => {
          if (products.length === index + 1) {
            return (
              <div ref={lastElementRef} key={product.id}>
                <ProductCard product={product} addToCart={handleAddToCart} />
              </div>
            );
          }
          return <ProductCard key={product.id} product={product} addToCart={handleAddToCart} />;
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