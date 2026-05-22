import { Star, ShoppingCart } from 'lucide-react';
import './ProductCard.css';

export default function ProductCard({ product, onAddToCart, onProductClick }) {
  return (
    <div className="product-card" onClick={() => onProductClick(product)}>
      <div className="product-image-container">
        {product.isNew && <span className="badge-new">New</span>}
        <img src={product.image} alt={product.name} className="product-image" loading="lazy" />
        <div className="product-overlay">
          <button 
            className="btn-add-cart" 
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-category">{product.category}</div>
        <h3 className="product-title">{product.name}</h3>
        
        <div className="product-rating">
          <div className="stars">
            <Star className="star-icon filled" size={14} fill="currentColor" />
            <span className="rating-value">{product.rating}</span>
          </div>
          <span className="reviews-count">({product.reviews})</span>
        </div>
        
        <div className="product-price">
          ₹{product.price.toLocaleString('en-IN')}
        </div>
      </div>
    </div>
  );
}
