import { useEffect, useState } from 'react';
import { X, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import './QuickView.css';

const QuickView = ({ product, isOpen, onClose }) => {
  const { addToCart } = useCart();
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSelectedImage(0);
      if (product?.sizes?.length) setSelectedSize(product.sizes[0]);
      if (product?.colors?.length) setSelectedColor(product.colors[0]);
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const isWished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1, selectedSize, selectedColor);
    onClose();
  };

  return (
    <div className="quickview-overlay animate-fade-in" onClick={onClose}>
      <div className="quickview-modal glass" onClick={e => e.stopPropagation()}>
        <button className="quickview-close icon-btn" onClick={onClose} aria-label="Close">
          <X size={24} />
        </button>
        
        <div className="quickview-grid">
          <div className="quickview-gallery">
            <img 
              src={product.images && product.images[selectedImage]} 
              alt={product.name} 
              className="quickview-main-image image-cover" 
            />
            {product.images && product.images.length > 1 && (
              <div className="quickview-thumbnails">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    className={`thumbnail-btn ${selectedImage === idx ? 'active' : ''}`}
                    onClick={() => setSelectedImage(idx)}
                  >
                    <img src={img} alt="" className="image-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="quickview-info">
            <p className="label-sm text-muted" style={{color: 'var(--text-secondary)'}}>{product.category}</p>
            <h2 className="heading-md mt-2">{product.name}</h2>
            
            <div className="quickview-price mt-4">
              <span className="current-price">${product.price.toFixed(2)}</span>
              {product.originalPrice > product.price && (
                <span className="original-price">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>
            
            <p className="quickview-desc mt-4 text-muted" style={{color: 'var(--text-secondary)'}}>{product.description}</p>
            
            {product.sizes && product.sizes.length > 0 && (
              <div className="quickview-options mt-4">
                <p className="label-sm mb-2">Size</p>
                <div className="options-grid">
                  {product.sizes.map(size => (
                    <button 
                      key={size}
                      className={`option-btn ${selectedSize === size ? 'active' : ''}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            {product.colors && product.colors.length > 0 && (
              <div className="quickview-options mt-4">
                <p className="label-sm mb-2">Color</p>
                <div className="options-grid">
                  {product.colors.map(color => (
                    <button 
                      key={color}
                      className={`option-btn ${selectedColor === color ? 'active' : ''}`}
                      onClick={() => setSelectedColor(color)}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div className="quickview-actions mt-6">
              <button className="btn-primary flex-1" onClick={handleAddToCart}>
                Add to Cart
              </button>
              <button 
                className={`btn-icon ${isWished ? 'wished' : ''}`} 
                onClick={() => toggleWishlist(product)}
                style={{border: '1px solid var(--border-color)'}}
              >
                <Heart size={24} fill={isWished ? 'currentColor' : 'none'} />
              </button>
            </div>
            
            <Link to={`/product/${product.id}`} className="view-details-link mt-4" onClick={onClose}>
              View Full Details →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
