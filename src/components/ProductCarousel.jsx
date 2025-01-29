import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const products = [
  {
    image: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&q=80&w=800',
    title: 'CCTV Installation',
    description: 'High-quality security camera systems'
  },
  {
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&q=80&w=800',
    title: 'Solar Solutions',
    description: 'Sustainable energy systems'
  },
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
    title: 'Web Development',
    description: 'Custom digital solutions'
  },
  {
    image: 'https://images.unsplash.com/photo-1557758478-e1e7f1539b5c?auto=format&fit=crop&q=80&w=800',
    title: 'Vehicle Tracking',
    description: 'Advanced GPS tracking systems'
  }
];

function ProductCarousel() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Solutions in Action</h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="rounded-xl overflow-hidden"
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ProductCarousel;