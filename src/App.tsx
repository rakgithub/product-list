import './App.css';
import { ProductProvider } from './context/ProductContext';
import { ProductGrid } from './components/products/productGrid/ProductGrid';
import { Header } from './components/header/Header';

function App() {
    return (
    <ProductProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <ProductGrid />
        </main>
      </div>
    </ProductProvider>
  );
}

export default App;
