import { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterSidebar from './components/FilterSidebar';
import ProductGrid from './components/ProductGrid';
import UserProfileModal from './components/UserProfileModal';
import CartDrawer from './components/CartDrawer';
import ProductDetailsModal from './components/ProductDetailsModal';
import { products } from './data';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [activePriceRange, setActivePriceRange] = useState({ label: 'All', min: 0, max: Infinity });
  const [minRating, setMinRating] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleProfileClick = () => {
    setIsProfileModalOpen(true);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => 
      item.product.id === productId ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Category filter
      const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
      
      // Price filter
      const matchesPrice = product.price >= activePriceRange.min && product.price <= activePriceRange.max;
      
      // Rating filter
      const matchesRating = product.rating >= minRating;

      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });
  }, [searchQuery, activeCategory, activePriceRange, minRating]);

  return (
    <div className="app-container">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        cartCount={cartCount}
        onProfileClick={handleProfileClick}
        onCartClick={handleCartClick}
      />
      
      <main className="main-content">
        <FilterSidebar 
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activePriceRange={activePriceRange}
          setActivePriceRange={setActivePriceRange}
          minRating={minRating}
          setMinRating={setMinRating}
        />
        
        <ProductGrid 
          products={filteredProducts} 
          onAddToCart={addToCart} 
          onProductClick={(product) => setSelectedProduct(product)}
        />
      </main>

      <UserProfileModal 
        isOpen={isProfileModalOpen} 
        onClose={() => setIsProfileModalOpen(false)} 
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeFromCart}
      />

      <ProductDetailsModal
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />
    </div>
  );
}

export default App;
