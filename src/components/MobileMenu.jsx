import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="mobile-menu-overlay animate-fade-in" onClick={onClose}>
      <div className="mobile-menu-drawer glass" onClick={e => e.stopPropagation()}>
        <div className="mobile-menu-header">
          <Link to="/" className="navbar-brand" onClick={onClose}>VELORA</Link>
          <button className="icon-btn" onClick={onClose} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        
        <nav className="mobile-menu-nav">
          <Link to="/" className="mobile-nav-link" onClick={onClose}>Home</Link>
          <Link to="/shop" className="mobile-nav-link" onClick={onClose}>Shop All</Link>
          <Link to="/collections" className="mobile-nav-link" onClick={onClose}>Collections</Link>
          <Link to="/collections/jewellery" className="mobile-nav-link" onClick={onClose}>Jewellery</Link>
          <Link to="/collections/watches" className="mobile-nav-link" onClick={onClose}>Watches</Link>
          <Link to="/collections/bags" className="mobile-nav-link" onClick={onClose}>Bags</Link>
          <Link to="/collections/shoes" className="mobile-nav-link" onClick={onClose}>Shoes</Link>
          <Link to="/collections/accessories" className="mobile-nav-link" onClick={onClose}>Accessories</Link>
          <Link to="/about" className="mobile-nav-link" onClick={onClose}>About</Link>
          <Link to="/wishlist" className="mobile-nav-link" onClick={onClose}>Wishlist</Link>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;
