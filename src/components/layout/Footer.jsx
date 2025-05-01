import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Activity,
} from "lucide-react";
import Container from "./Container";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
  };

  return (
    <footer className="bg-blue-400 ">
      <Container className="py-12 px-4 sm:px-6 lg:px-8">
       
        <div className="mb-12 p-6 sm:p-8  ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
              Stay Updated with Our Newsletter
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto mb-6">
              Subscribe to receive the latest job opportunities, industry news,
              and healthcare staffing insights directly to your inbox.
            </p>

            {isSubscribed ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                Thank you for subscribing! You'll receive our next newsletter
                soon.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 border-2 border-blue-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 bg-blue-500 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors disabled:opacity-70  cursor-pointer"
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Activity size={42} className="text-blue-500" />
                <span className="ml-2 text-xl font-extrabold text-white">
                  Health Staff Manager
                </span>
              </Link>
            </div>

            <p className="text-white text-lg">
              Streamlining healthcare staffing to connect professionals with
              healthcare facilities efficiently and effectively.
            </p>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-600 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className=" text-white text-xl font-extrabold mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="#"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Healthcare Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Credential Verification
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Skill Development
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Career Advancement
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="text-white text-lg hover:text-blue-600 transition-colors"
                >
                  Compliance Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h3 className=" text-white text-xl font-extrabold mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-3 text-blue-900 flex-shrink-0 mt-1"
                />
                <span className="text-white text-lg">
                  123 Healthcare Ave, Medical District, MD 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-blue-900 flex-shrink-0" />
                <Link
                  to="tel:+11234567890"
                  className="text-white text-lg hover:text-blue-500 transition-colors"
                >
                  +1 (123) 456-7890
                </Link>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-blue-900 flex-shrink-0" />
                <Link
                  to="mailto:info@healthstaffmanager.com"
                  className="text-white text-lg hover:text-blue-500 transition-colors"
                >
                  info@healthstaffmanager.com
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-white text-lg text-center  md:text-base">
            © {new Date().getFullYear()} Health Staff Manager. All rights
            reserved.
            <span className="block sm:inline-block sm:ml-4 mt-2 sm:mt-0">
              <Link
                to="/privacy"
                className="hover:text-blue-500 transition-colors"
              >
                Privacy Policy
              </Link>{" "}
              |
              <Link
                to="/terms"
                className="hover:text-blue-500 transition-colors ml-2"
              >
                Terms of Service
              </Link>
            </span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
