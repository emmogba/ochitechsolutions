const services = [
  {
    title: 'Technology Services',
    description: 'Transform your operations with our cutting-edge IT solutions.',
    features: [
      'Network setup and management',
      'IT consulting and support',
      'Hardware and software solutions',
      'System upgrades and optimization'
    ],
    icon: '💻'
  },
  {
    title: 'CCTV Services',
    description: 'Enhance security with our state-of-the-art CCTV systems.',
    features: [
      'Installation of high-definition cameras',
      'Remote monitoring solutions',
      'Maintenance and troubleshooting',
      'Custom surveillance systems'
    ],
    icon: '🎥'
  },
  {
    title: 'Solar Services',
    description: 'Go green with our renewable energy solutions.',
    features: [
      'Solar panel installation',
      'Energy system design',
      'Maintenance and repair',
      'Energy audits and optimization'
    ],
    icon: '☀️'
  },
  {
    title: 'Web Development',
    description: 'Elevate your digital presence with custom web solutions.',
    features: [
      'Custom website design',
      'Mobile app development',
      'E-commerce platforms',
      'UI/UX design'
    ],
    icon: '🌐'
  },
  {
    title: 'Marketing Solutions',
    description: 'Expand your reach with tailored marketing services.',
    features: [
      'Digital marketing strategies',
      'SEO optimization',
      'Social media management',
      'Content creation'
    ],
    icon: '📈'
  },
  {
    title: 'Car Tracking',
    description: 'Monitor and secure your vehicles with advanced tracking.',
    features: [
      'Real-time GPS tracking',
      'Fleet management systems',
      'Geo-fencing and alerts',
      'Detailed tracking reports'
    ],
    icon: '🚗'
  }
];

function Services() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl">Comprehensive solutions designed to meet your technology, security, energy, and business growth needs.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <span className="text-blue-600 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;