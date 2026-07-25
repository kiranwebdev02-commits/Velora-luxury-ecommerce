import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import QuickView from '../components/QuickView';
import './Wishlist.css';

const Wishlist = () => {
  const { wishlistItems } = useWishlist();
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <div className="wishlist-page page-padding">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="heading-lg">YOUR WISHLIST</h1>
          <p className="text-muted mt-4" style={{color: 'var(--text-secondary)'}}>
            {wishlistItems.length} {wishlistItems.length === 1 ? 'Item' : 'Items'}
          </p>
        </div>
        
        {wishlistItems.length > 0 ? (
          <div className="shop-grid">
            {wishlistItems.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onQuickView={setQuickViewProduct} 
              />
            ))}
          </div>
        ) : (
          <div className="empty-state flex-center full-width" style={{minHeight: '40vh', flexDirection: 'column'}}>
            <p className="text-muted mb-6" style={{color: 'var(--text-secondary)'}}>Your wishlist is currently empty.</p>
            <Link to="/shop" className="btn-secondary">Discover The Collection</Link>
          </div>
        )}
      </div>
      
      <QuickView 
        product={quickViewProduct} 
        isOpen={!!quickViewProduct} 
        onClose={() => setQuickViewProduct(null)} 
      />
    </div>
  );
};

export default Wishlist;
