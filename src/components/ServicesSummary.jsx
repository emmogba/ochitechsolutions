import { Link } from 'react-router-dom';

const services = [
  {
    icon: '💻',
    title: 'Technology Solutions',
    description: 'Comprehensive IT services and support for your business needs.'
  },
  {
    icon: '🎥',
    title: 'CCTV Systems',
    description: 'Advanced security solutions to protect your assets.'
  },
  {
    icon: '☀️',
    title: 'Solar Power',
    description: 'Sustainable energy solutions for a greener future.'
  },
  {
    icon: '🌐',
    title: 'Web Development',
    description: 'Custom websites and applications for your digital presence.'
  }
];

function ServicesSummary() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
          >
            View All Services
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServicesSummary;