import Hero from '../components/Hero';
import EditorialSection from '../components/EditorialSection';
import SignatureCollection from '../components/SignatureCollection';
import JewelleryCollection from '../components/JewelleryCollection';
import CategoryGrid from '../components/CategoryGrid';
import NewArrivals from '../components/NewArrivals';
import SignatureCampaign from '../components/SignatureCampaign';
import FeaturedJewellery from '../components/FeaturedJewellery';
import TrendingNow from '../components/TrendingNow';
import BrandStory from '../components/BrandStory';
import Newsletter from '../components/Newsletter';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <EditorialSection />
      <SignatureCollection />
      <JewelleryCollection />
      <CategoryGrid />
      <NewArrivals />
      <SignatureCampaign />
      <FeaturedJewellery />
      <TrendingNow />
      <BrandStory />
      <Newsletter />
    </div>
  );
};

export default Home;
