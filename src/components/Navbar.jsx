import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import MobileMenu from './MobileMenu';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { cartItemCount, toggleCart } = useCart();
  const { wishlistItems } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className={`navbar ${isScrolled ? 'scrolled glass' : ''}`}>
        <div className="container navbar-inner">
          <button 
            className="mobile-toggle hide-desktop"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>

          <Link to="/" className="navbar-brand">
            VELORA
          </Link>

          <nav className="navbar-nav hide-mobile">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/shop" className="nav-link">Shop</Link>
            <Link to="/collections" className="nav-link">Collections</Link>
            <Link to="/collections/jewellery" className="nav-link">Jewellery</Link>
            <Link to="/about" className="nav-link">About</Link>
          </nav>

          <div className="navbar-actions">
            <button className="icon-btn hide-mobile" aria-label="Search">
              <Search size={20} />
            </button>
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/wishlist" className="icon-btn hide-mobile" aria-label="Wishlist">
              <Heart size={20} />
              {wishlistItems.length > 0 && (
                <span className="badge">{wishlistItems.length}</span>
              )}
            </Link>
            <Link to="/cart" className="icon-btn" aria-label="Cart">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && (
                <span className="badge">{cartItemCount}</span>
              )}
            </Link>
            <Link to="/account" className="icon-btn hide-mobile" aria-label="Account">
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>
      
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </>
  );
};

export default Navbar;
