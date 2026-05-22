import ProductCard from './ProductCard';
import './ProductGrid.css';

export default function ProductGrid({ products, onAddToCart, onProductClick }) {
  if (products.length === 0) {
    return (
      <div className="empty-state">
        <h2>No products found</h2>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onAddToCart={onAddToCart} 
          onProductClick={onProductClick}
        />
      ))}
    </div>
  );
}
