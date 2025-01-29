import Hero from '../components/Hero';
import ProductCarousel from '../components/ProductCarousel';
import ServicesSummary from '../components/ServicesSummary';
import Partners from '../components/Partners';
import Team from '../components/Team';

function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <ProductCarousel />
      <ServicesSummary />
      <Partners />
      <Team />
    </div>
  );
}

export default Home;