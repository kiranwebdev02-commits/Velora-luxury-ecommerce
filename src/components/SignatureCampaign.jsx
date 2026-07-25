import { Link } from 'react-router-dom';
import './SignatureCampaign.css';

const SignatureCampaign = () => {
  return (
    <section className="campaign-section full-height">
      <div className="campaign-bg overlay-dark parallax-bg">
        <img 
          src="https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=2000&auto=format&fit=crop" 
          alt="Campaign" 
          className="image-cover"
          loading="lazy"
        />
      </div>
      
      <div className="campaign-content container flex-center text-center">
        <div className="campaign-text">
          <h2 className="heading-hero mb-6">LESS ORDINARY.<br/>MORE YOU.</h2>
          <Link to="/collections/campaign" className="btn-primary mt-4">
            Explore The Campaign
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SignatureCampaign;
