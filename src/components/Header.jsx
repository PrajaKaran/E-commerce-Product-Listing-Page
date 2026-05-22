import { Search, ShoppingCart, User } from 'lucide-react';
import './Header.css';

export default function Header({ searchQuery, setSearchQuery, cartCount, onProfileClick, onCartClick }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span className="logo-text">Nexus<span className="logo-accent">Mart</span></span>
        </div>
        
        <div className="search-bar-container">
          <div className="search-input-wrapper">
            <Search className="search-icon" size={20} />
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>
        </div>

        <div className="header-actions">
          <button className="icon-btn" onClick={onProfileClick}>
            <User size={24} />
          </button>
          <button className="icon-btn cart-btn" onClick={onCartClick}>
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </button>
        </div>
      </div>
    </header>
  );
}
