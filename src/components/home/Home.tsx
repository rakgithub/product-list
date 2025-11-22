import { CategoryFilterSidebar } from "../common/categoryFiltersSidebar/CategoryFilterSidebar";
import { ProductGrid } from "../products/productGrid/ProductGrid";

export const Home: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-8">
        <div className="flex gap-6 lg:gap-8">
            <aside className="hidden md:block w-64 flex-shrink-0">
                <CategoryFilterSidebar />
            </aside>
            <section className="flex-1">
                <ProductGrid />
            </section>
        </div>
    </main>
  );
};