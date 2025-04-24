import { Link } from "react-router";
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

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-28">
      <Container className=" py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 flex items-center">
                <Activity size={42} className="text-blue-400" />
                <span className="ml-1 text-xl font-bold">
                  Health Staff Manager
                </span>
              </Link>
            </div>

            <p className="text-gray-600 max-w-xs">
              Streamlining healthcare staffing to connect professionals with
              healthcare facilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-primary">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-600 hover:text-primary"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-gray-600 hover:text-primary"
                >
                  Apply Now
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-600 hover:text-primary">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Healthcare Staffing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Credential Verification
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Skill Development
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Career Advancement
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary">
                  Healthcare Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold text-gray-800 mb-4">
              Contact Us
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin
                  size={18}
                  className="mr-2 text-[#00A2E8] flex-shrink-0 mt-0.5"
                />
                <span className="text-gray-600">
                  123 Healthcare Ave, Medical District, MD 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-[#00A2E8]" />
                <a
                  href="tel:+11234567890"
                  className="text-gray-600 hover:text-primary"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-[#00A2E8]" />
                <a
                  href="mailto:info@healthstaffmanager.com"
                  className="text-gray-600 hover:text-primary"
                >
                  info@healthstaffmanager.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-800 text-center">
            © {new Date().getFullYear()} Health Staff Manager. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
