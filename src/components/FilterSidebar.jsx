import './FilterSidebar.css';

const categories = ['All', 'Electronics', 'Clothing', 'Accessories'];
const priceRanges = [
  { label: 'All', min: 0, max: Infinity },
  { label: 'Under ₹5,000', min: 0, max: 5000 },
  { label: '₹5,000 - ₹15,000', min: 5000, max: 15000 },
  { label: 'Over ₹15,000', min: 15000, max: Infinity }
];

export default function FilterSidebar({ 
  activeCategory, 
  setActiveCategory, 
  activePriceRange, 
  setActivePriceRange,
  minRating,
  setMinRating
}) {
  return (
    <aside className="filter-sidebar">
      <div className="filter-group">
        <h3 className="filter-title">Categories</h3>
        <ul className="filter-list">
          {categories.map(category => (
            <li key={category}>
              <button 
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">Price Range</h3>
        <ul className="filter-list">
          {priceRanges.map((range, index) => (
            <li key={index}>
              <button 
                className={`filter-btn ${activePriceRange.label === range.label ? 'active' : ''}`}
                onClick={() => setActivePriceRange(range)}
              >
                {range.label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="filter-group">
        <h3 className="filter-title">Minimum Rating</h3>
        <div className="rating-slider-container">
          <input 
            type="range" 
            min="0" 
            max="5" 
            step="0.5" 
            value={minRating} 
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
            className="rating-slider"
          />
          <div className="rating-value">{minRating} Stars & Up</div>
        </div>
      </div>
    </aside>
  );
}
