import { Link } from "react-router";
import Container from "../../components/layout/Container";
import Navbar from "../../components/layout/Navbar";
import { ArrowRight, CheckCircle } from "lucide-react";
import FeatureSection from "../../feature/FeatureSection";
import Worksection from "../../feature/Worksection";
import Testimonial from "../../feature/Testimonial";
import Footer from "../../components/layout/Footer";
import Button from "../../components/common/Button";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <section className="relative top-[70px] bg-gradient-to-br from-[#00A2E8]/100 to-[#5FB3B3]/100 text-white">
        <Container className=" px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center pb-24">
            <div className="space-y-6">
              <h1 className="text-2xl md:text-4xl font-bold leading-tight">
                Connecting Healthcare Professionals with Opportunities
              </h1>
              <p className="text-xl text-white/90 max-w-lg">
                Streamlining the process of matching qualified healthcare
                professionals with healthcare facilities in need.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button className=" flex bg-white hover:bg-white text-[#00A2E8] py-2 px-6 rounded-xl cursor-pointer">
                    Apply Now <ArrowRight size={20} className="pl-2  pt-1" />
                  </Button>
                </Link>

                <Link to="/login">
                  <Button className=" text-white hover:bg-white py-2 px-3 hover:text-black hover:rounded-xl  cursor-pointer  pt-1 duration-500">
                    Log In
                  </Button>
                </Link>
              </div>
            </div>
            <div className=" md:block">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Healthcare professionals"
                className="rounded-lg shadow-sm w-full object-cover h-96"
              />
            </div>
          </div>

          <div className="w-full absolute left-0 right-0 bottom-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 100"
              className="w-full h-auto -mb-1"
            >
              <path
                fill="#ffffff"
                fillOpacity="1"
                d="M0,32L80,42.7C160,53,320,75,480,69.3C640,64,800,32,960,21.3C1120,11,1280,21,1360,26.7L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
              ></path>
            </svg>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <FeatureSection />
        </Container>
      </section>
      <section className="py-18 bg-gray-50">
        <Container className=" px-4 sm:px-6 lg:px-8">
          <Worksection />
          <div className="flex items-center justify-center mt-12">
            <Link to="/register">
              <Button className=" flex  bg-blue-500 text-white py-2 px-4 rounded-xl cursor-pointer">
                Get Started Today <ArrowRight size={24} className="ml-2" />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
      <section className="py-8">
        <Testimonial />
      </section>
      <section className="bg-[#00A2E8] py-16 mt-18">
        <Container className=" px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Advance Your Healthcare Career?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join thousands of healthcare professionals on our platform and
                discover new opportunities.
              </p>
              <Link to="/register">
                <Button className=" flex bg-white hover:bg-white text-[#00A2E8] py-2 px-6 rounded-xl cursor-pointer">
                  Apply Now <ArrowRight size={20} className="pl-2  pt-1" />
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-xl">
                    Verified Facilities
                  </h3>
                  <p className="text-white/80 text-lg ">
                    All healthcare facilities on our platform undergo a thorough
                    verification process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-xl">
                    Transparent Process
                  </h3>
                  <p className="text-white/80 text-lg ">
                    Our platform provides full transparency throughout the
                    application and matching process.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <CheckCircle className="text-white mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-white font-semibold text-xl">
                    Support Team
                  </h3>
                  <p className="text-white/80 text-lg ">
                    Our dedicated support team is available to assist you at
                    every step of your journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  );
};

export default LandingPage;
