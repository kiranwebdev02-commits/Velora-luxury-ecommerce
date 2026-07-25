import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section full-height">
      <div className="hero-bg overlay-dark">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
          alt="VELORA New Season" 
          className="image-cover"
        />
      </div>
      
      <div className="hero-content container">
        <div className="hero-text-block animate-fade-in">
          <span className="label-sm text-gold">VELORA / NEW SEASON 2026</span>
          <h1 className="heading-hero mt-4 mb-6">DEFINE YOUR<br/>PRESENCE.</h1>
          <p className="hero-desc">
            Curated pieces for those who believe true style is never accidental.
          </p>
          
          <div className="hero-actions mt-8">
            <Link to="/collections/new" className="btn-primary">Explore Collection</Link>
            <Link to="/shop" className="btn-secondary">Discover The Edit</Link>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <span>Scroll</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
