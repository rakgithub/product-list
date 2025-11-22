import { ShoppingBag } from "lucide-react";

export const EmptyProducts: React.FC = () => {
  return (
    <div className="text-center py-20">
        <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No products found</h3>
        <p className="text-gray-400">Try adjusting your search or filter</p>
  </div>
  );
};