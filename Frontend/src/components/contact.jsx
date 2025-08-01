import { useState } from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact CraveCart</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h2>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <FaMapMarkerAlt className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Address</h3>
                <p className="text-gray-600">
                  123 Food Street
                  <br />
                  Downtown District
                  <br />
                  City, State 12345
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <FaPhone className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                <p className="text-gray-600">(555) 123-4567</p>
                <p className="text-sm text-gray-500">Available 24/7 for orders</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <FaEnvelope className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                <p className="text-gray-600">info@cravecart.com</p>
                <p className="text-gray-600">support@cravecart.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-amber-100 p-3 rounded-full">
                <FaClock className="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Hours</h3>
                <div className="text-gray-600 space-y-1">
                  <p>Monday - Thursday: 11:00 AM - 10:00 PM</p>
                  <p>Friday - Saturday: 11:00 AM - 11:00 PM</p>
                  <p>Sunday: 12:00 PM - 9:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <FaMapMarkerAlt className="w-12 h-12 mx-auto mb-2" />
              <p>Interactive Map</p>
              <p className="text-sm">123 Food Street, Downtown District</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors"
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="order">Order Issue</option>
                <option value="feedback">Feedback</option>
                <option value="partnership">Partnership</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-colors resize-vertical"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white py-3 px-6 rounded-lg hover:bg-amber-600 transition-colors font-medium flex items-center justify-center space-x-2"
            >
              <FaPaperPlane className="w-5 h-5" />
              <span>Send Message</span>
            </button>
          </form>

          {/* Additional Info */}
          <div className="mt-8 p-6 bg-amber-50 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">Quick Response Times</h3>
            <p className="text-gray-600 text-sm mb-2">
              We typically respond to all inquiries within 2-4 hours during business hours.
            </p>
            <p className="text-gray-600 text-sm">For urgent order issues, please call us directly at (555) 123-4567.</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-2">What are your delivery areas?</h3>
            <p className="text-gray-600 text-sm">
              We currently deliver within a 10-mile radius of our restaurant. Enter your address during checkout to
              confirm delivery availability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-2">How long does delivery take?</h3>
            <p className="text-gray-600 text-sm">
              Most orders are delivered within 30-45 minutes. During peak hours, it may take up to 60 minutes.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-2">Do you offer catering services?</h3>
            <p className="text-gray-600 text-sm">
              Yes! We offer catering for events of all sizes. Contact us at least 24 hours in advance to discuss your
              needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h3 className="font-semibold text-gray-800 mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-600 text-sm">
              We accept all major credit cards, debit cards, PayPal, and cash on delivery.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}