import { useState } from 'react';
import ProductCard from './ProductCard';
import QuickView from './QuickView';
import { products } from '../data/products';
import './NewArrivals.css'; // Just importing for good measure, will reuse JewelleryCollection css if needed but better to have its own or share

const NewArrivals = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  
  const safeProducts = Array.isArray(products) ? products : [];
  const newProducts = safeProducts.filter(p => p.isNew);
  
  const tabs = ['All', 'Jewellery', 'Watches', 'Bags', 'Shoes'];
  
  const filteredProducts = activeTab === 'All' 
    ? newProducts.slice(0, 8)
    : newProducts.filter(p => p.category === activeTab).slice(0, 8);

  return (
    <section className="new-arrivals-section section-padding">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="heading-md">JUST IN</h2>
          <p className="mt-4 text-muted max-w-lg mx-auto" style={{color: 'var(--text-secondary)'}}>
            The latest pieces, curated for the new season.
          </p>
          
          <div className="category-tabs mt-8">
            {tabs.map(tab => (
              <button 
                key={tab}
                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
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
          <p className="text-center text-muted mt-8" style={{color: 'var(--text-secondary)'}}>Curating new pieces...</p>
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

export default NewArrivals;
