import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './CategoryGrid.css';

const categories = [
  {
    id: 'jewellery',
    title: 'JEWELLERY',
    desc: 'The Art of Detail',
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?q=80&w=800&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 'watches',
    title: 'WATCHES',
    desc: 'Time, Refined',
    image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 'bags',
    title: 'HANDBAGS',
    desc: 'Carry Your Identity',
    image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 'shoes',
    title: 'SHOES',
    desc: 'Walk Different',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop',
    size: 'medium'
  },
  {
    id: 'accessories',
    title: 'ACCESSORIES',
    desc: 'The Finishing Touch',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=800&auto=format&fit=crop',
    size: 'medium'
  }
];

const CategoryGrid = () => {
  return (
    <section className="category-section section-padding">
      <div className="container">
        <div className="category-masonry">
          {categories.map((cat, index) => (
            <Link 
              to={`/collections/${cat.id}`} 
              key={cat.id} 
              className={`category-card card-${cat.size} animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img src={cat.image} alt={cat.title} className="image-cover" loading="lazy" />
              <div className="overlay-dark"></div>
              
              <div className="category-content">
                <div className="category-text">
                  <h3 className="heading-md">{cat.title}</h3>
                  <p className="mt-2 text-gold">{cat.desc}</p>
                </div>
                
                <div className="explore-arrow">
                  <ArrowRight size={24} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
