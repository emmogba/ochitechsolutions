const partners = [
  { name: 'UKmoni Global Business Services', description: 'Leader in real estate and business solutions' },
  { name: 'Pleasure Travels', description: 'Trusted name in travel and logistics' },
  { name: 'Beniko Group of Company', description: 'Excellence in diverse industries' },
  { name: 'Dimaq', description: 'Specialists in marketing and digital solutions' },
  { name: 'Mega Tracker', description: 'Leaders in vehicle tracking solutions' },
  { name: 'Supply Chain Global Services', description: 'Experts in logistics solutions' },
  { name: 'Benue State Sports Marketing', description: 'Partners in community development' }
];

function Partners() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
              <h3 className="text-xl font-semibold mb-2">{partner.name}</h3>
              <p className="text-gray-600">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;