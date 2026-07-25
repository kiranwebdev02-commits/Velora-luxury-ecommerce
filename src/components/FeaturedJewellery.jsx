import { useCart } from '../context/CartContext';
import './FeaturedJewellery.css';

const FeaturedJewellery = () => {
  const { addToCart } = useCart();
  
  const product = {
    id: 'feat-1',
    name: 'The Sovereign Diamond Necklace',
    price: 3450.00,
    material: '18k Solid Gold, VVS1 Diamonds',
    colors: ['Gold', 'White Gold', 'Rose Gold'],
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop',
    description: 'A masterpiece of fine jewellery. The Sovereign Necklace features a stunning arrangement of hand-selected diamonds set in 18k solid gold. Designed to lay perfectly on the collarbone, it is the ultimate expression of modern elegance.'
  };

  return (
    <section className="featured-section section-padding">
      <div className="container">
        <div className="featured-grid">
          <div className="featured-image-wrapper">
            <img src={product.image} alt={product.name} className="image-cover" loading="lazy" />
          </div>
          
          <div className="featured-info">
            <span className="label-sm text-gold">Featured</span>
            <h2 className="heading-md mt-4">{product.name}</h2>
            
            <p className="featured-price mt-6">${product.price.toFixed(2)}</p>
            <p className="featured-desc mt-6 text-muted">{product.description}</p>
            
            <div className="featured-details mt-8">
              <div className="detail-item">
                <span className="label-sm">Material</span>
                <p>{product.material}</p>
              </div>
              <div className="detail-item mt-4">
                <span className="label-sm">Available In</span>
                <p>{product.colors.join(' / ')}</p>
              </div>
            </div>
            
            <button 
              className="btn-primary mt-8 w-full-mobile"
              onClick={() => addToCart(product, 1, null, product.colors[0])}
            >
              Add To Cart — ${product.price.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJewellery;
