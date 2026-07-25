import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import './ProductCard.css';

const ProductCard = ({ product, onQuickView }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [isHovered, setIsHovered] = useState(false);

  const isWished = isInWishlist(product.id);

  return (
    <div 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img 
            src={isHovered && product.images && product.images[1] ? product.images[1] : (product.images && product.images[0])} 
            alt={product.name}
            className="product-image image-cover"
            loading="lazy"
          />
        </Link>
        
        {product.isNew && <span className="product-badge new-badge">New</span>}
        {product.discount > 0 && <span className="product-badge discount-badge">-{product.discount}%</span>}
        
        <div className="product-actions">
          <button 
            className="action-btn" 
            onClick={() => onQuickView(product)}
            aria-label="Quick View"
          >
            <Eye size={18} />
          </button>
          <button 
            className="action-btn"
            onClick={() => addToCart(product)}
            aria-label="Add to Cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
      
      <div className="product-info">
        <div className="product-header">
          <h3 className="product-name">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <button 
            className={`wishlist-btn ${isWished ? 'active' : ''}`}
            onClick={() => toggleWishlist(product)}
            aria-label="Toggle Wishlist"
          >
            <Heart size={18} fill={isWished ? 'currentColor' : 'none'} />
          </button>
        </div>
        
        <p className="product-category label-sm">{product.category}</p>
        
        <div className="product-price">
          <span className="current-price">${product.price.toFixed(2)}</span>
          {product.originalPrice > product.price && (
            <span className="original-price">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
