import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Container from "../../components/layout/Container";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="pt-38 text-white py-16 bg-gradient-to-br from-[#00A2E8]/90 to-[#5FB3B3]">
          <Container className="px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              About Health Staff Manager
            </h1>
            <p className="text-[18px] text-white/90 max-w-2xl mx-auto ">
              Connecting qualified healthcare professionals with leading
              healthcare facilities
            </p>
          </Container>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At Health Staff Manager, we're dedicated to revolutionizing
                  healthcare staffing by creating seamless connections between
                  qualified professionals and healthcare facilities in need.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Streamlining the healthcare staffing process
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Ensuring quality healthcare delivery
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Supporting healthcare professionals' career growth
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare professionals"
                  className="rounded-lg shadow-xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Who We Are</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto ">
              We are a dedicated team of healthcare and technology professionals
              who understand the critical importance of efficient staffing in
              the medical field. Drawing on our combined expertise in healthcare
              operations, digital transformation, and user-centered design, we
              created the Health Staff Manager App to bridge the gap between
              healthcare institutions and qualified professionals. Our team
              recognizes the day-to-day challenges faced by hospitals and
              clinics — from delayed recruitment processes and credential
              verification to task assignments and performance tracking. At the
              same time, we understand how difficult it can be for skilled
              healthcare workers to find transparent, well-managed job
              opportunities. That’s why we built the Health Staff Manager App: a
              modern platform that simplifies recruitment, streamlines staff
              management, and empowers both administrators and medical workers
              with smart tools. Whether it's managing worker availability,
              verifying credentials, or assigning urgent tasks, the platform
              ensures that everything is handled securely, efficiently, and with
              a human-first approach. At the core of what we do is a belief that
              better staffing leads to better care. And with that vision, we're
              building a future where healthcare workforce management is no
              longer a burden, but a strength.
            </p>
            <h2 className="text-3xl font-bold mt-18 mb-8 text-center">
              What We Do
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto ">
              At Health Staff Manager App, we simplify the complex process of
              healthcare staffing by offering a powerful, all-in-one digital
              solution. Our platform is built to support the entire staffing
              journey — from the moment a healthcare professional submits an
              application to the daily tasks they complete on the job, and the
              administrative oversight that ensures smooth operation. By
              addressing key pain points in healthcare workforce management, we
              help organizations save time, reduce errors, and improve service
              delivery — while giving healthcare workers a reliable and
              transparent experience
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
