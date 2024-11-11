import Image from 'next/image';

function AboutPage() {
  return (
    <div
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bk2.jpg')", // Background image path
      }}
    >
      <div className="w-full h-full bg-black bg-opacity-50 flex justify-center items-center text-white">
        <div className="text-center px-6 md:px-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Kids Dresses Collection</h1>
          <p className="text-lg md:text-xl mb-6">
            Explore our beautiful and comfortable collection of dresses for young girls. Each dress is carefully
            designed to offer the perfect blend of style and comfort for your little one.
          </p>
          <p className="text-lg md:text-xl mb-6">
            Our dresses are made from high-quality fabrics and are perfect for all occasions, from playdates to parties.
            Discover the magic of childhood in every stitch of our clothing.
          </p>
          <button className="px-6 py-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
