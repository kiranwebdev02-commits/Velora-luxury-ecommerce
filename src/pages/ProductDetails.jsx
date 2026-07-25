import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { products } from '../data/products';
import { Heart, ChevronLeft, ChevronRight, Minus, Plus } from 'lucide-react';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();
  
  const product = products.find(p => p.id === id);
  
  const [currentImageIdx, setCurrentImageIdx] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (product) {
      if (product.sizes?.length) setSelectedSize(product.sizes[0]);
      if (product.colors?.length) setSelectedColor(product.colors[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="page-padding flex-center" style={{minHeight: '60vh'}}>
        <div className="text-center">
          <h2 className="heading-md">Product Not Found</h2>
          <button className="btn-secondary mt-6" onClick={() => navigate('/shop')}>Back to Shop</button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIdx((prev) => (prev + 1) % product.images.length);
  };
  
  const prevImage = () => {
    setCurrentImageIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    if (product.sizes?.length && !selectedSize) {
      alert("Please select a size");
      return;
    }
    if (product.colors?.length && !selectedColor) {
      alert("Please select a color");
      return;
    }
    
    addToCart(product, quantity, selectedSize, selectedColor);
  };

  const isWished = isInWishlist(product.id);

  return (
    <div className="product-details-page page-padding">
      <div className="container">
        <div className="product-layout">
          
          <div className="product-gallery">
            <div className="main-image-container">
              <img src={product.images[currentImageIdx]} alt={product.name} className="image-cover" />
              
              {product.images.length > 1 && (
                <div className="gallery-controls">
                  <button onClick={prevImage} className="icon-btn bg-blur"><ChevronLeft /></button>
                  <button onClick={nextImage} className="icon-btn bg-blur"><ChevronRight /></button>
                </div>
              )}
            </div>
            
            {product.images.length > 1 && (
              <div className="thumbnail-list mt-4">
                {product.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    className={`thumbnail-btn ${currentImageIdx === idx ? 'active' : ''}`}
                    onClick={() => setCurrentImageIdx(idx)}
                  >
                    <img src={img} alt="" className="image-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <div className="product-info-detailed">
            <div className="breadcrumbs label-sm text-muted mb-4" style={{color: 'var(--text-secondary)'}}>
              <span>{product.category}</span> / <span>{product.subcategory}</span>
            </div>
            
            <h1 className="heading-md">{product.name}</h1>
            <p className="product-price-large mt-4">${product.price.toFixed(2)}</p>
            
            <div className="product-desc-large mt-6">
              <p>{product.description}</p>
            </div>
            
            <div className="product-specs mt-8">
              <div className="spec-row">
                <span className="label-sm">Material</span>
                <p>{product.material}</p>
              </div>
            </div>
            
            {product.colors?.length > 0 && (
              <div className="product-options mt-8">
                <span className="label-sm mb-4 block">Color: {selectedColor}</span>
                <div className="options-row">
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
            
            {product.sizes?.length > 0 && (
              <div className="product-options mt-6">
                <span className="label-sm mb-4 block">Size: {selectedSize}</span>
                <div className="options-row">
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
            
            <div className="purchase-actions mt-10">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
              </div>
              
              <button className="btn-primary flex-1" onClick={handleAddToCart}>
                ADD TO CART
              </button>
              
              <button 
                className={`wishlist-btn-large ${isWished ? 'active' : ''}`}
                onClick={() => toggleWishlist(product)}
                aria-label="Wishlist"
              >
                <Heart size={24} fill={isWished ? 'currentColor' : 'none'} />
              </button>
            </div>
            
            <div className="accordion-section mt-12">
              <div className="accordion-item">
                <h3 className="label-sm">Shipping & Returns</h3>
                <p className="text-muted mt-2 text-sm" style={{color: 'var(--text-secondary)'}}>
                  Complimentary express shipping on all orders. Returns accepted within 30 days of purchase in original condition.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
