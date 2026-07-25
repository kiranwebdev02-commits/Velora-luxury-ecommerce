import './EditorialSection.css';

const EditorialSection = () => {
  return (
    <section className="editorial-section section-padding">
      <div className="container">
        <div className="editorial-grid">
          <div className="editorial-text">
            <h2 className="heading-lg">A NEW LANGUAGE OF LUXURY.</h2>
            <p className="mt-6 text-muted">
              VELORA brings together refined craftsmanship, contemporary design, and timeless expression. 
              Each piece is meticulously designed to elevate your presence and make a lasting statement.
            </p>
          </div>
          
          <div className="editorial-images">
            <div className="editorial-img-large">
              <img 
                src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000&auto=format&fit=crop" 
                alt="Luxury Fashion" 
                className="image-cover"
                loading="lazy"
              />
            </div>
            <div className="editorial-img-small">
              <img 
                src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop" 
                alt="Fine Jewellery Detail" 
                className="image-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;
