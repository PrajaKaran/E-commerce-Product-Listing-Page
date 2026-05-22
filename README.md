# E-commerce Product Listing Page

This project is a React.js based E-commerce Product Listing Page built to demonstrate modern web development practices. It fulfills the core learning objectives of building a scalable and clean product interface.

## Concepts & Skills Demonstrated

### 1. Component Props
The application is broken down into reusable components, relying heavily on **props** to pass data and state management functions down the tree:
- **`ProductCard` (`src/components/ProductCard.jsx`)**: Accepts a `product` object as a prop and renders its specific details (image, price, rating, etc.). This makes the card highly reusable.
- **`ProductGrid` (`src/components/ProductGrid.jsx`)**: Accepts an array of `products` as a prop and maps over them to render multiple `ProductCard` components.
- **`FilterSidebar` & `Header`**: These components receive state values (like `searchQuery`, `activeCategory`) and their corresponding setter functions (like `setSearchQuery`, `setActiveCategory`) as props from `App.jsx`, allowing them to update the global filtering state.

### 2. Filtering Logic
The core filtering engine lives in **`src/App.jsx`**. 
- It uses React's `useMemo` hook to efficiently calculate the `filteredProducts` array without unnecessary re-renders.
- The logic combines multiple conditions:
  - **Search**: Checks if the product name or category includes the search string.
  - **Category Filter**: Checks if the product matches the selected category.
  - **Price Range Filter**: Checks if the product's price falls between the selected min and max values.
  - **Rating Filter**: Ensures the product rating is greater than or equal to the selected minimum rating.
- Only products that pass *all* active conditions are passed down to the `ProductGrid`.

### 3. UI Structuring
The UI is strictly modularized for clean architecture:
- **`App.jsx`**: Acts as the "Controller", managing state and overall layout.
- **`Header.jsx`**: Manages the top navigation and search input.
- **`FilterSidebar.jsx`**: Groups all filtering controls into a dedicated aside panel.
- **`ProductGrid.jsx` & `ProductCard.jsx`**: Handle the presentation of the data.
- **Styling (`CSS`)**: CSS is scoped to individual components (e.g., `Header.css`, `ProductCard.css`) to prevent global style conflicts and make maintenance easier.

### 4. Responsive Design
The application uses modern CSS techniques to adapt to any screen size:
- **CSS Grid**: Used in `ProductGrid.css` (`grid-template-columns: repeat(auto-fill, minmax(280px, 1fr))`). This automatically calculates how many columns can fit on the screen and wraps them appropriately, creating a fluid grid without relying heavily on media queries.
- **Flexbox**: Used extensively in the `Header` and overall layout to align items flexibly.
- **Media Queries**: Specific breakpoints (e.g., `@media (max-width: 768px)`) are used to stack the `FilterSidebar` on top of the `ProductGrid` on mobile devices, ensuring the UI remains usable on smaller screens.

## How to Run Locally
1. Ensure you have Node.js installed.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
