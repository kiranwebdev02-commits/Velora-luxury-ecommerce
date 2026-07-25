import { useState } from 'react';
import './Account.css';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate login/register
    alert(isLogin ? "Login successful!" : "Registration successful!");
  };

  return (
    <div className="account-page page-padding">
      <div className="container">
        <div className="account-layout">
          <div className="account-image-side hide-mobile">
            <img 
              src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1000&auto=format&fit=crop" 
              alt="VELORA Account" 
              className="image-cover"
            />
            <div className="overlay-dark"></div>
            <div className="account-image-content">
              <h2 className="heading-md mb-4 text-white">THE VELORA WORLD</h2>
              <p className="text-white text-sm" style={{opacity: 0.8}}>Manage your orders, wishlists, and signature pieces.</p>
            </div>
          </div>
          
          <div className="account-form-side">
            <div className="account-form-container">
              <h1 className="heading-lg mb-8 text-center">
                {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
              </h1>
              
              <div className="account-tabs mb-8">
                <button 
                  type="button"
                  className={`account-tab ${isLogin ? 'active' : ''}`}
                  onClick={() => setIsLogin(true)}
                >
                  Sign In
                </button>
                <button 
                  type="button"
                  className={`account-tab ${!isLogin ? 'active' : ''}`}
                  onClick={() => setIsLogin(false)}
                >
                  Register
                </button>
              </div>

              <form onSubmit={handleSubmit} className="account-form">
                {!isLogin && (
                  <div className="form-row mb-6">
                    <div className="form-group w-full" style={{width: '100%'}}>
                      <input type="text" placeholder="First Name" className="form-input" required />
                    </div>
                    <div className="form-group w-full" style={{width: '100%'}}>
                      <input type="text" placeholder="Last Name" className="form-input" required />
                    </div>
                  </div>
                )}
                
                <div className="form-group mb-6 w-full">
                  <input type="email" placeholder="Email Address" className="form-input w-full" required />
                </div>
                
                <div className="form-group mb-6 w-full">
                  <input type="password" placeholder="Password" className="form-input w-full" required />
                </div>
                
                {isLogin && (
                  <div className="flex-between mb-8 text-sm">
                    <label className="flex gap-2 cursor-pointer text-muted" style={{color: 'var(--text-secondary)', alignItems: 'center'}}>
                      <input type="checkbox" className="custom-checkbox" />
                      Remember me
                    </label>
                    <button type="button" className="text-gold underline-hover">Forgot Password?</button>
                  </div>
                )}
                
                {!isLogin && (
                  <div className="mb-8 text-sm text-muted" style={{color: 'var(--text-secondary)'}}>
                    <p>By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
                  </div>
                )}

                <button type="submit" className="btn-primary w-full" style={{width: '100%'}}>
                  {isLogin ? 'SIGN IN' : 'CREATE ACCOUNT'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
