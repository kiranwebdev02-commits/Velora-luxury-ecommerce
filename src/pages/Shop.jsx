import { useState, useEffect } from 'react';
import { Filter, ChevronDown, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import QuickView from '../components/QuickView';
import { products, categories as cats } from '../data/products';
import './Shop.css';

const Shop = () => {
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filterCategory, setFilterCategory] = useState('all');
  
  const safeProducts = Array.isArray(products) ? products : [];
  
  let displayedProducts = [...safeProducts];
  if (filterCategory !== 'all') {
    displayedProducts = displayedProducts.filter(p => p.category.toLowerCase() === filterCategory.toLowerCase());
  }
  
  if (sortBy === 'price-low') displayedProducts.sort((a,b) => a.price - b.price);
  if (sortBy === 'price-high') displayedProducts.sort((a,b) => b.price - a.price);
  if (sortBy === 'newest') displayedProducts.sort((a,b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
  if (sortBy === 'rating') displayedProducts.sort((a,b) => b.rating - a.rating);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop-page page-padding">
      <div className="container">
        <div className="shop-header">
          <h1 className="heading-lg">THE COLLECTION</h1>
          <p className="text-muted mt-4 max-w-lg" style={{color: 'var(--text-secondary)'}}>
            Explore our meticulously curated selection of premium pieces.
          </p>
        </div>
        
        <div className="shop-toolbar mt-8">
          <button 
            className="filter-toggle-btn btn-secondary hide-desktop"
            onClick={() => setIsFilterOpen(true)}
          >
            <Filter size={18} /> Filters
          </button>
          
          <div className="sort-container">
            <span className="label-sm">Sort By:</span>
            <div className="select-wrapper">
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="featured">Featured</option>
                <option value="newest">Newest Arrivals</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
              <ChevronDown size={16} />
            </div>
          </div>
        </div>
        
        <div className="shop-layout mt-8">
          <aside className={`shop-sidebar ${isFilterOpen ? 'open' : ''}`}>
            {isFilterOpen && (
              <div className="filter-header hide-desktop mb-8 flex" style={{justifyContent: 'space-between', alignItems: 'center'}}>
                <h2 className="heading-sm">Filters</h2>
                <button className="icon-btn" onClick={() => setIsFilterOpen(false)}><X size={24} /></button>
              </div>
            )}
            
            <div className="filter-group">
              <h3 className="label-sm mb-4">Categories</h3>
              <ul className="filter-list">
                <li>
                  <button className={filterCategory === 'all' ? 'active' : ''} onClick={() => { setFilterCategory('all'); setIsFilterOpen(false); }}>
                    All Products
                  </button>
                </li>
                {cats.map(cat => (
                  <li key={cat.id}>
                    <button 
                      className={filterCategory === cat.name.toLowerCase() ? 'active' : ''}
                      onClick={() => { setFilterCategory(cat.name.toLowerCase()); setIsFilterOpen(false); }}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          
          <div className="shop-grid">
            {displayedProducts.length > 0 ? (
              displayedProducts.map(product => (
                <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
              ))
            ) : (
              <div className="empty-state flex-center full-width">
                <p className="text-muted" style={{color: 'var(--text-secondary)'}}>No products found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <QuickView 
        product={quickViewProduct} 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </div>
  );
};

export default Shop;
