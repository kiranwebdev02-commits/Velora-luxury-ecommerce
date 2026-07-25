import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import QuickView from './QuickView';
import { products } from '../data/products';
import './TrendingNow.css';

const TrendingNow = () => {
  const scrollRef = useRef(null);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  
  const safeProducts = Array.isArray(products) ? products : [];
  const trendingProducts = safeProducts.slice(0, 8); 

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -400 : 400;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="trending-section section-padding bg-secondary">
      <div className="container">
        <div className="trending-header">
          <h2 className="heading-md">TRENDING NOW</h2>
          
          <div className="trending-controls hide-mobile">
            <button className="icon-btn" onClick={() => scroll('left')} aria-label="Scroll left">
              <ChevronLeft size={24} />
            </button>
            <button className="icon-btn" onClick={() => scroll('right')} aria-label="Scroll right">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="trending-carousel mt-8" ref={scrollRef}>
          {trendingProducts.map((product) => (
            <div key={product.id} className="carousel-item">
              <ProductCard 
                product={product} 
                onQuickView={setQuickViewProduct} 
              />
            </div>
          ))}
          {trendingProducts.length === 0 && (
            <p className="text-muted" style={{color: 'var(--text-secondary)'}}>Loading trending items...</p>
          )}
        </div>
      </div>
      
      <QuickView 
        product={quickViewProduct} 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </section>
  );
};

export default TrendingNow;
