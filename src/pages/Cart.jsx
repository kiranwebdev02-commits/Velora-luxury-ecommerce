import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Trash2 } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page page-padding flex-center" style={{minHeight: '70vh'}}>
        <div className="text-center">
          <h1 className="heading-md mb-6">YOUR CART IS EMPTY</h1>
          <p className="text-muted mb-8" style={{color: 'var(--text-secondary)'}}>Explore our collections to find your next signature piece.</p>
          <Link to="/shop" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    );
  }

  const subtotal = cartTotal;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  return (
    <div className="cart-page page-padding">
      <div className="container">
        <h1 className="heading-lg mb-10">SHOPPING BAG</h1>
        
        <div className="cart-layout">
          <div className="cart-items-section">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="cart-item-row">
                <Link to={`/product/${item.id}`} className="cart-item-img">
                  <img src={item.images[0]} alt={item.name} className="image-cover" />
                </Link>
                
                <div className="cart-item-details">
                  <div className="flex" style={{justifyContent: 'space-between'}}>
                    <Link to={`/product/${item.id}`}>
                      <h3 className="heading-sm">{item.name}</h3>
                    </Link>
                    <p className="cart-price">${item.price.toFixed(2)}</p>
                  </div>
                  
                  <div className="text-muted text-sm mt-2" style={{color: 'var(--text-secondary)'}}>
                    {item.color && <p>Color: {item.color}</p>}
                    {item.size && <p>Size: {item.size}</p>}
                  </div>
                  
                  <div className="cart-item-actions mt-4">
                    <div className="quantity-selector-sm">
                      <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity - 1)}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.size, item.color, item.quantity + 1)}><Plus size={14} /></button>
                    </div>
                    
                    <button 
                      className="remove-btn text-muted" 
                      onClick={() => removeFromCart(item.id, item.size, item.color)}
                      aria-label="Remove item"
                    >
                      <Trash2 size={16} />
                      <span className="hide-mobile">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="cart-summary-section">
            <div className="summary-card">
              <h3 className="heading-sm mb-6">ORDER SUMMARY</h3>
              
              <div className="summary-row">
                <span className="text-muted" style={{color: 'var(--text-secondary)'}}>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <div className="summary-row">
                <span className="text-muted" style={{color: 'var(--text-secondary)'}}>Shipping</span>
                <span>{shipping === 0 ? 'Complimentary' : `$${shipping.toFixed(2)}`}</span>
              </div>
              
              <div className="summary-total mt-6 pt-6">
                <span className="heading-sm">Total</span>
                <span className="heading-sm">${total.toFixed(2)}</span>
              </div>
              
              <button 
                className="btn-primary w-full mt-8"
                onClick={() => navigate('/checkout')}
              >
                PROCEED TO CHECKOUT
              </button>
              
              <div className="secure-checkout mt-4 text-center text-sm text-muted" style={{color: 'var(--text-secondary)'}}>
                <p>Secure SSL Checkout. Free shipping on orders over $500.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
