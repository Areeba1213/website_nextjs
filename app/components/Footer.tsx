import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-purple-200 to-pink-300 text-gray-700 py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
        
        {/* Brand and Contact Info */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h2 className="text-3xl font-bold text-pink-600">KidsParty</h2>
          <p className="text-sm">
            Bringing joy and style to your child’s wardrobe!
          </p>
          <p>Contact us at: <br /> 
            <a href="mailto:contact@kidsparty.com" className="text-blue-600 underline">contact@kidsparty.com</a>
          </p>
        </div>
        
        {/* Navigation Links */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-pink-500">About Us</Link></li>
            <li><Link href="/products" className="hover:text-pink-500">Products</Link></li>
            <li><Link href="/contact" className="hover:text-pink-500">Contact Us</Link></li>
          </ul>
        </div>
        
        {/* Add to Cart Button */}
        <div className="flex flex-col items-center space-y-4">
          <h3 className="font-semibold text-lg">Shop</h3>
          <button className="bg-pink-500 text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-pink-600">
            <FontAwesomeIcon icon={faCartPlus} className="text-white" />
            <span>Add to Cart</span>
          </button>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-600 hover:text-blue-700" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-500 hover:text-pink-600" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="text-2xl text-blue-400 hover:text-blue-500" />
          </a>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-500">
        © 2024 KidsParty. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;





