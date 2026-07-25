import { Link } from 'react-router-dom';
import './BrandStory.css';

const BrandStory = () => {
  return (
    <section className="story-section section-padding">
      <div className="container">
        <div className="story-grid">
          <div className="story-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
              alt="Brand Story" 
              className="image-cover grayscale"
              loading="lazy"
            />
          </div>
          
          <div className="story-content">
            <h2 className="heading-lg">BEYOND THE OBJECT.</h2>
            <p className="mt-8 text-muted text-lg" style={{color: 'var(--text-secondary)'}}>
              VELORA was founded on a simple principle: true luxury is quiet, intentional, and deeply personal. 
              We believe that the objects we wear should not just decorate, but articulate who we are. 
              From our studio to your collection, every piece is a testament to uncompromising quality and timeless design.
            </p>
            
            <div className="mt-10">
              <Link to="/about" className="btn-secondary">
                Discover Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
