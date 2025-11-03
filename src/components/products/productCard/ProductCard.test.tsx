import { render, screen } from '@testing-library/react';
import { ProductCard } from './ProductCard';

// MOCK DATA
const mockProduct = {
  id: 1,
  title: 'Luxury Leather Wallet with RFID Protection and Vintage Finish',
  price: 59.99,
  category: 'accessories',
  image: 'http://example.com/wallet.jpg',
  description: 'A brief description.',
};

describe('ProductCard', () => {
  it('should render the product title, category, and price', () => {
    render(<ProductCard product={mockProduct} />);

    expect(screen.getByRole('heading', { level: 3, name: mockProduct.title })).toBeInTheDocument();
    expect(screen.getByText(new RegExp(mockProduct.category, 'i'))).toBeInTheDocument();
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();
  });

  it('should render the product image when the image URL is provided', () => {
    render(<ProductCard product={mockProduct} />);
    
    const productImage = screen.getByRole('img', { name: mockProduct.title });

    expect(productImage).toBeInTheDocument();
    expect(productImage).toHaveAttribute('src', mockProduct.image);
    expect(productImage).toHaveAttribute('loading', 'lazy');
  });

  it('should render the "Add to Cart" button', () => {
    render(<ProductCard product={mockProduct} />);

    const button = screen.getByRole('button', { name: /add to cart/i });
    
    expect(button).toBeInTheDocument();
  });

});