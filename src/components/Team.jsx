const team = [
  {
    name: 'John Doe',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    description: 'With over 15 years of experience in technology solutions.'
  },
  {
    name: 'Sarah Johnson',
    position: 'Technical Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    description: 'Expert in system architecture and security solutions.'
  },
  {
    name: 'Michael Chen',
    position: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    description: 'Specializes in project management and client relations.'
  }
];

function Team() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-100"
              />
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-3">{member.position}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;