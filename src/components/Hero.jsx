import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="relative bg-gray-900 text-white py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold mb-6">Innovating Tomorrow, Empowering Today</h1>
          <p className="text-xl mb-8">Transform your business with cutting-edge technology solutions from Ochitech Solutions.</p>
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg inline-block transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;