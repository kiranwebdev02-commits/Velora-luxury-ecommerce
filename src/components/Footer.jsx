import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-padding bg-secondary">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="heading-md">VELORA</Link>
            <p className="text-muted mt-4">
              Curated pieces for those who believe true style is never accidental.
            </p>
          </div>
          
          <div className="footer-links">
            <h4 className="label-sm mb-4">Shop</h4>
            <ul>
              <li><Link to="/shop">All Products</Link></li>
              <li><Link to="/collections/new">New Arrivals</Link></li>
              <li><Link to="/collections/jewellery">Jewellery</Link></li>
              <li><Link to="/collections/watches">Watches</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="label-sm mb-4">Customer Care</h4>
            <ul>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/shipping">Shipping & Returns</Link></li>
              <li><Link to="/track">Track Order</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="label-sm mb-4">Legal</h4>
            <ul>
              <li><Link to="/terms">Terms of Service</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/cookies">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 VELORA. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Twitter">TW</a>
            <a href="#" aria-label="Pinterest">PI</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
