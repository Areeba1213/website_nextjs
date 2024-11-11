import Image from "next/image";

function ContactUs() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-pink-200 to-purple-300 py-10 px-4 lg:px-20">
      
      {/* Form Section */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full lg:w-1/2 lg:mr-8 mb-8 lg:mb-0">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6">
          Interested in purchasing a dress? Fill out the form below!
        </p>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="name">Your Name</label>
            <input type="text" id="name" placeholder="Enter your name" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="dressType">Dress Type</label>
            <input type="text" id="dressType" placeholder="Enter dress type or ID" className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea id="message" placeholder="Additional details"  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-400"></textarea>
          </div>
          <button type="submit" className="w-full py-3 bg-pink-500 text-white font-bold rounded hover:bg-pink-600 transition duration-200">Submit</button>
        </form>
      </div>
      
      {/* Image Section with Overlay */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center">
        <Image src="/images/horse.png" alt="Contact Us Dress Image" width={400} height={400} className="rounded-lg shadow-lg" />
        
        {/* Overlay Text */}
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center">
          <span className="bg-red-500 text-white font-bold text-xl lg:text-2xl py-2 px-4 rounded-full opacity-90">Hurry up!</span>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;

  
