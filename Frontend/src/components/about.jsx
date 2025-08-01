import { FaClock, FaUsers, FaAward, FaHeart } from "react-icons/fa";
import image1 from "../assets/image1.avif";
export default function About() {
  return (
    <main className="container mx-auto px-4 py-8 bg-slate-200">
   
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About CraveCart</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We're passionate about bringing you the finest culinary experiences right to your doorstep. Since 2020, we've
          been serving our community with love, quality, and exceptional service.
        </p>
      </div>

      
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
           CraveCart was born from a simple idea: everyone deserves access to delicious, high-quality food without
            the hassle. What started as a small family kitchen has grown into a beloved local institution.
          </p>
          <p className="text-gray-600 mb-4">
            We source our ingredients from local farms and suppliers, ensuring that every dish we prepare is fresh,
            flavorful, and made with care. Our team of experienced chefs brings together traditional recipes with modern
            culinary techniques.
          </p>
          <p className="text-gray-600">
            Today, we're proud to serve thousands of satisfied customers across the city, maintaining our commitment to
            quality, speed, and exceptional customer service.
          </p>
        </div>
        <div className="relative">
          <img src={image1} alt="" className="rounded-lg shadow-lg w-full" />
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaClock className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              We guarantee delivery within 30-45 minutes, ensuring your food arrives hot and fresh.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaAward className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality First</h3>
            <p className="text-gray-600">
              Only the finest ingredients make it into our dishes. We never compromise on quality.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaUsers className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Community Focus</h3>
            <p className="text-gray-600">
              We're proud to be part of this community and support local suppliers and farmers.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FaHeart className="w-8 h-8 text-amber-500" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Made with Love</h3>
            <p className="text-gray-600">
              Every dish is prepared with passion and attention to detail by our skilled chefs.
            </p>
          </div>
        </div>
      </div>

      
  
      <div className="bg-orange-50 rounded-lg p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-amber-500 mb-2">50K+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500 mb-2">100K+</div>
            <div className="text-gray-600">Orders Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500 mb-2">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-amber-500 mb-2">25</div>
            <div className="text-gray-600">Menu Items</div>
          </div>
        </div>
      </div>
    </main>
  );
}