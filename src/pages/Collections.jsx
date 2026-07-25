import { Link } from 'react-router-dom';
import { collections } from '../data/products';
import './Collections.css';

const Collections = () => {
  return (
    <div className="collections-page page-padding">
      <div className="container">
        <div className="text-center mb-10" style={{marginBottom: '4rem'}}>
          <h1 className="heading-lg">COLLECTIONS</h1>
          <p className="text-muted mt-4 max-w-lg mx-auto" style={{color: 'var(--text-secondary)'}}>
            Discover our carefully curated collections, each telling a unique story of craftsmanship and design.
          </p>
        </div>
        
        <div className="collections-grid">
          {collections.map(collection => (
            <Link to={`/collections/${collection.id}`} key={collection.id} className="collection-card">
              <div className="collection-img-wrapper">
                <img src={collection.image} alt={collection.name} className="image-cover" />
                <div className="overlay-dark"></div>
              </div>
              <div className="collection-info">
                <h2 className="heading-md">{collection.name}</h2>
                <p className="mt-2 text-gold" style={{color: 'var(--color-gold)'}}>Explore Collection</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
