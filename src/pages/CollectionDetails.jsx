import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import QuickView from '../components/QuickView';
import { products, collections, categories } from '../data/products';
import './CollectionDetails.css';

const CollectionDetails = () => {
  const { category } = useParams();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  
  // Find if it's a category or a collection
  const catMatch = categories.find(c => c.id === category);
  const colMatch = collections.find(c => c.id === category);
  
  const title = catMatch ? catMatch.name : (colMatch ? colMatch.name : category.replace('-', ' ').toUpperCase());
  const description = catMatch ? catMatch.description : (colMatch ? colMatch.description : 'Explore this exclusive curation.');
  const image = catMatch?.image || colMatch?.image || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop';
  
  const safeProducts = Array.isArray(products) ? products : [];
  
  let displayedProducts = [];
  if (catMatch) {
    displayedProducts = safeProducts.filter(p => p.category.toLowerCase() === catMatch.name.toLowerCase());
  } else if (category === 'new') {
    displayedProducts = safeProducts.filter(p => p.isNew);
  } else if (category === 'signature') {
    displayedProducts = safeProducts.filter(p => p.tags && p.tags.includes('signature'));
  } else if (category === 'campaign') {
    displayedProducts = safeProducts.slice(0, 12);
  } else {
    displayedProducts = safeProducts.filter(p => 
      p.category.toLowerCase() === category.toLowerCase() || 
      p.subcategory.toLowerCase() === category.toLowerCase()
    );
  }

  return (
    <div className="collection-details-page">
      <div className="collection-hero full-height">
        <div className="hero-bg overlay-dark">
          <img src={image} alt={title} className="image-cover parallax-bg" loading="lazy" />
        </div>
        <div className="hero-content container flex-center text-center">
          <div className="hero-text-block animate-fade-in" style={{maxWidth: '800px', margin: '0 auto'}}>
            <span className="label-sm text-gold">VELORA COLLECTION</span>
            <h1 className="heading-hero mt-4 mb-6" style={{textTransform: 'uppercase'}}>{title}</h1>
            <p className="hero-desc mx-auto" style={{fontSize: '1.2rem'}}>{description}</p>
          </div>
        </div>
      </div>
      
      <div className="section-padding">
        <div className="container">
          <div className="shop-grid">
            {displayedProducts.length > 0 ? (
              displayedProducts.map(product => (
                <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
              ))
            ) : (
              <div className="empty-state flex-center text-center" style={{gridColumn: '1/-1', padding: '4rem 0'}}>
                <p className="text-muted mb-6" style={{color: 'var(--text-secondary)'}}>No products available in this collection.</p>
                <Link to="/shop" className="btn-secondary">Return to Shop</Link>
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

export default CollectionDetails;
