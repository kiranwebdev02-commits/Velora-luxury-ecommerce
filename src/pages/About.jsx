import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero full-height">
        <div className="hero-bg overlay-dark">
          <img 
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop" 
            alt="About VELORA" 
            className="image-cover parallax-bg" 
          />
        </div>
        <div className="hero-content container flex-center text-center">
          <div className="hero-text-block animate-fade-in">
            <span className="label-sm text-gold">OUR STORY</span>
            <h1 className="heading-hero mt-4 mb-6">BEYOND<br/>THE OBJECT.</h1>
          </div>
        </div>
      </div>
      
      <section className="section-padding">
        <div className="container">
          <div className="about-grid">
            <div className="about-text-content">
              <h2 className="heading-md mb-6">THE VELORA VISION</h2>
              <p className="text-muted text-lg mb-6" style={{color: 'var(--text-secondary)'}}>
                Founded in 2026, VELORA emerged from a singular vision: to create objects of lasting beauty that articulate the identity of the wearer. 
                We believe that true luxury is not loud or ostentatious, but quiet, intentional, and deeply personal.
              </p>
              <p className="text-muted text-lg" style={{color: 'var(--text-secondary)'}}>
                Every piece in our collection is meticulously designed and crafted by master artisans using only the finest, ethically sourced materials. 
                Our approach blends traditional craftsmanship with contemporary design, resulting in timeless pieces that transcend fleeting trends.
              </p>
            </div>
            
            <div className="about-image-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" 
                alt="Craftsmanship" 
                className="image-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-padding bg-secondary">
        <div className="container text-center mx-auto" style={{maxWidth: '800px'}}>
          <h2 className="heading-md mb-6">COMMITMENT TO EXCELLENCE</h2>
          <p className="text-muted text-lg mb-10" style={{color: 'var(--text-secondary)'}}>
            We are committed to uncompromising quality at every stage. From the initial sketch to the final polish, 
            each VELORA piece undergoes rigorous inspection to ensure it meets our exacting standards.
          </p>
          <Link to="/shop" className="btn-primary">Explore The Collection</Link>
        </div>
      </section>
    </div>
  );
};

export default About;
