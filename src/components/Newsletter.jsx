import { useState } from 'react';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('Subscribed successfully.');
    setEmail('');
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section className="newsletter-section section-padding bg-card">
      <div className="container">
        <div className="newsletter-content text-center">
          <h2 className="heading-md">ENTER THE VELORA WORLD.</h2>
          <p className="mt-4 text-muted mx-auto max-w-lg" style={{color: 'var(--text-secondary)'}}>
            Discover new collections, limited releases, and stories from the world of VELORA.
          </p>
          
          <form className="newsletter-form mt-8" onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              aria-label="Email Address"
            />
            <button type="submit" className="btn-primary">
              JOIN VELORA
            </button>
          </form>
          {status && <p className="mt-4 text-gold" style={{color: 'var(--color-gold)'}}>{status}</p>}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
