import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  return (
    <div className="cart-overlay animate-fade-in" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer glass" onClick={e => e.stopPropagation()}>
        <div className="cart-header">
          <h2 className="heading-sm">Your Cart ({cartItems.length})</h2>
          <button className="icon-btn" onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="cart-empty flex-center">
              <ShoppingBag size={48} className="mb-4" />
              <p>Your cart is empty.</p>
              <button 
                className="btn-primary mt-4"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item, index) => (
              <div key={`${item.id}-${index}`} className="cart-item">
                <img src={item.images[0]} alt={item.name} className="cart-item-image image-cover" />
                <div className="cart-item-details">
                  <div className="cart-item-header">
                    <h4 className="cart-item-name">{item.name}</h4>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                    >
                      <X size={16} />
                    </button>
                  </div>
                  <p className="cart-item-price">${item.price.toFixed(2)}</p>
                  
                  {(item.size || item.color) && (
                    <div className="cart-item-options label-sm text-muted">
                      {item.color && <span>{item.color}</span>}
                      {item.size && item.color && <span> / </span>}
                      {item.size && <span>{item.size}</span>}
                    </div>
                  )}
                  
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}>
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}>
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span>Subtotal</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <p className="cart-tax-note text-muted" style={{color: 'var(--text-secondary)'}}>Shipping and taxes calculated at checkout.</p>
            <div className="cart-actions">
              <Link to="/cart" className="btn-secondary" onClick={() => setIsCartOpen(false)}>
                View Cart
              </Link>
              <Link to="/checkout" className="btn-primary" onClick={() => setIsCartOpen(false)}>
                Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
