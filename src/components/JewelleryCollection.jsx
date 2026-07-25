import { useState } from 'react';
import ProductCard from './ProductCard';
import QuickView from './QuickView';
import { products } from '../data/products';
import './JewelleryCollection.css';

const JewelleryCollection = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  
  const safeProducts = Array.isArray(products) ? products : [];
  const jewelleryProducts = safeProducts.filter(p => p.category === 'Jewellery');
  
  const categories = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];
  
  const filteredProducts = activeCategory === 'All' 
    ? jewelleryProducts.slice(0, 4)
    : jewelleryProducts.filter(p => p.subcategory === activeCategory).slice(0, 4);

  return (
    <section className="jewellery-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="heading-md">THE ART OF DETAIL</h2>
          
          <div className="category-tabs mt-8">
            {categories.map(cat => (
              <button 
                key={cat}
                className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="product-grid">
          {filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onQuickView={setQuickViewProduct} 
            />
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <p className="text-center text-muted" style={{color: 'var(--text-secondary)'}}>Curating new pieces...</p>
        )}
      </div>
      
      <QuickView 
        product={quickViewProduct} 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </section>
  );
};

export default JewelleryCollection;
