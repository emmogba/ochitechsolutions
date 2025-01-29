const values = [
  {
    title: 'Innovation',
    description: 'We constantly push boundaries to deliver cutting-edge solutions.'
  },
  {
    title: 'Excellence',
    description: 'Quality and reliability are the foundation of everything we do.'
  },
  {
    title: 'Customer Focus',
    description: 'We prioritize understanding and addressing your unique needs.'
  },
  {
    title: 'Integrity',
    description: 'We maintain the highest standards of professional ethics.'
  }
];

function About() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">About Ochitech Solutions</h1>
          <p className="text-xl max-w-3xl">Where innovation meets excellence. We are a dynamic tech company dedicated to providing cutting-edge solutions that empower individuals and businesses to thrive in an ever-evolving digital world.</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 mb-8">To be a leading provider of innovative technology solutions, transforming lives and businesses globally.</p>
              
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600">To deliver tailored, reliable, and forward-thinking solutions that empower our clients to achieve their goals while embracing the future of technology.</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Our Core Values</h3>
              <div className="grid grid-cols-1 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow">
                    <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;