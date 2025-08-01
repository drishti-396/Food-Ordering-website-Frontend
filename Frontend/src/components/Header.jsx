import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Header({ currentPage, onPageChange }) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-amber-500  rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">C</span>
            </div>
            <span className="text-xl font-bold text-gray-800">CraveCart</span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => onPageChange("home")}
              className={`transition-colors ${
                currentPage === "home" ? "text-amber-500 font-semibold" : "text-gray-700 hover:text-orange-500 "
              }`}
            >
              Menu 
            </button>
            <button
              onClick={() => onPageChange("about")}
              className={`transition-colors ${
                currentPage === "about" ? "text-amber-500 font-semibold" : "text-gray-700  hover:text-orange-500"


              }`}
            >
              About
            </button>
            <button
              onClick={() => onPageChange("contact")}
              className={`transition-colors ${
                currentPage === "contact" ? "text-amber-500    font-semibold" : "text-gray-700 hover:text-orange-500 "
              }`}
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-1">
                <FaPhone className="w-4 h-4" />
                <span>(yyy) xxx-zzz</span>
              </div>
              <div className="flex items-center space-x-1">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>30-45 min</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}