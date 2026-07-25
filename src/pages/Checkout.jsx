import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, cartTotal } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    country: 'US',
    zip: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cartTotal;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className="checkout-page page-padding flex-center" style={{minHeight: '70vh'}}>
        <div className="text-center">
          <h2 className="heading-md mb-6">NO ITEMS TO CHECKOUT</h2>
          <Link to="/shop" className="btn-primary">Return to Shop</Link>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="checkout-page page-padding flex-center" style={{minHeight: '70vh'}}>
        <div className="text-center max-w-lg mx-auto" style={{maxWidth: '600px'}}>
          <h2 className="heading-lg mb-6">ORDER CONFIRMED</h2>
          <p className="text-muted mb-8" style={{color: 'var(--text-secondary)'}}>
            Thank you for your purchase. Your order has been received and is being processed. 
            A confirmation email will be sent to {formData.email} shortly.
          </p>
          <div className="order-details-box mb-8 p-6" style={{border: '1px solid var(--border-color)', padding: '2rem'}}>
            <p className="mb-2"><strong>Order Number:</strong> #VL{Math.floor(Math.random() * 1000000)}</p>
            <p className="mb-2"><strong>Total Paid:</strong> ${total.toFixed(2)}</p>
          </div>
          <Link to="/" className="btn-primary" onClick={() => window.location.reload()}>Return to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page page-padding">
      <div className="container">
        <h1 className="heading-lg mb-10 text-center">CHECKOUT</h1>
        
        <div className="checkout-layout">
          <div className="checkout-form-section">
            <form onSubmit={handleSubmit}>
              <h3 className="heading-sm mb-6">Contact Information</h3>
              <div className="form-group mb-8">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Email Address" 
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              
              <h3 className="heading-sm mb-6">Shipping Address</h3>
              <div className="form-row">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="firstName" 
                    placeholder="First Name" 
                    className="form-input"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="lastName" 
                    placeholder="Last Name" 
                    className="form-input"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              <div className="form-group mt-4">
                <input 
                  type="text" 
                  name="address" 
                  placeholder="Address" 
                  className="form-input"
                  value={formData.address}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-row mt-4">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="city" 
                    placeholder="City" 
                    className="form-input"
                    value={formData.city}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="zip" 
                    placeholder="Postal Code" 
                    className="form-input"
                    value={formData.zip}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <h3 className="heading-sm mb-6 mt-8">Payment</h3>
              <div className="form-group">
                <input 
                  type="text" 
                  name="cardNumber" 
                  placeholder="Card Number" 
                  className="form-input"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  required 
                />
              </div>
              <div className="form-row mt-4">
                <div className="form-group">
                  <input 
                    type="text" 
                    name="expDate" 
                    placeholder="MM/YY" 
                    className="form-input"
                    value={formData.expDate}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <input 
                    type="text" 
                    name="cvv" 
                    placeholder="CVV" 
                    className="form-input"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full mt-8"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'PROCESSING...' : `PAY $${total.toFixed(2)}`}
              </button>
            </form>
          </div>
          
          <div className="checkout-summary-section">
            <div className="summary-card">
              <h3 className="heading-sm mb-6">ORDER SUMMARY ({cartItems.length})</h3>
              
              <div className="checkout-items mb-6">
                {cartItems.map(item => (
                  <div key={`${item.id}-${item.size}-${item.color}`} className="checkout-item flex mb-4" style={{justifyContent: 'space-between'}}>
                    <div className="flex gap-4" style={{gap: '1rem'}}>
                      <div className="checkout-item-img">
                        <img src={item.images[0]} alt={item.name} className="image-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-xs text-muted" style={{color: 'var(--text-secondary)'}}>Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
