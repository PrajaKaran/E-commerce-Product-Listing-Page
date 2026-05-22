import { X, Star, ShoppingCart, ShieldCheck, Truck } from 'lucide-react';
import './ProductDetailsModal.css';

export default function ProductDetailsModal({ product, isOpen, onClose, onAddToCart }) {
  if (!isOpen || !product) return null;

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="product-modal-grid">
          <div className="product-modal-image-col">
            <div className="product-modal-image-wrapper">
              {product.isNew && <span className="badge-new-modal">New Arrival</span>}
              <img src={product.image} alt={product.name} className="product-modal-image" />
            </div>
          </div>
          
          <div className="product-modal-info-col">
            <span className="product-modal-category">{product.category}</span>
            <h2 className="product-modal-title">{product.name}</h2>
            
            <div className="product-modal-rating-row">
              <div className="stars">
                <Star className="star-icon filled" size={16} fill="currentColor" />
                <span className="rating-value">{product.rating}</span>
              </div>
              <span className="reviews-count">({product.reviews} customer reviews)</span>
            </div>
            
            <div className="product-modal-price">
              ₹{product.price.toLocaleString('en-IN')}
            </div>
            
            <div className="product-modal-description">
              <p>{product.description}</p>
            </div>
            
            <div className="product-features">
              <div className="feature-item">
                <Truck size={18} className="feature-icon" />
                <span>Free express delivery</span>
              </div>
              <div className="feature-item">
                <ShieldCheck size={18} className="feature-icon" />
                <span>1 Year Manufacturer Warranty</span>
              </div>
            </div>
            
            <div className="product-modal-actions">
              <button 
                className="btn-add-cart-large" 
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
