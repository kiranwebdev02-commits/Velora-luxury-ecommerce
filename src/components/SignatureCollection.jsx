import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './SignatureCollection.css';

const signatureItems = [
  {
    id: 'sig-1',
    name: 'Signature Sculpted Ring',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sig-2',
    name: 'Heritage Chronograph',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'sig-3',
    name: 'Velvet Evening Bag',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop'
  }
];

const SignatureCollection = () => {
  return (
    <section className="signature-section section-padding bg-secondary">
      <div className="container">
        <div className="section-header text-center mb-8">
          <h2 className="heading-md">THE SIGNATURE EDIT</h2>
          <p className="mt-4 text-muted max-w-lg mx-auto" style={{color: 'var(--text-secondary)'}}>
            Iconic pieces that define the VELORA aesthetic. Crafted for the modern individual.
          </p>
        </div>
        
        <div className="signature-grid">
          {signatureItems.map(item => (
            <div key={item.id} className="signature-card">
              <div className="signature-image-wrapper">
                <img src={item.image} alt={item.name} className="image-cover" loading="lazy" />
                <div className="overlay-dark signature-overlay"></div>
                <div className="signature-content">
                  <h3 className="heading-sm">{item.name}</h3>
                  <Link to={`/product/${item.id}`} className="discover-link mt-2">
                    DISCOVER PIECE <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureCollection;
