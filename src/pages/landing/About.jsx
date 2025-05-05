import Container from "../../components/layout/Container";
import { Briefcase, Building2, CheckCircle, Stethoscope } from "lucide-react";
import { values } from "../../feature/data/SectionData";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About page</title>
        <meta name="description" content="About page " />
      
      </Helmet>

      <div className="min-h-screen flex flex-col mt-18">
        <main className="flex-1">
          <section className="text-white py-20 bg-gradient-to-br from-[#00A2E8] to-[#5FB3B3]">
            <Container className="px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-2xl md:text-3xl font-bold mb-4">
                About Health Staff Manager
              </h1>
              <p className="text-[15px] text-white/90 max-w-2xl mx-auto">
                Empowering healthcare staffing through technology. We simplify
                hiring, task assignment, and worker management.
              </p>
            </Container>
          </section>

          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Our Mission
                </h2>
                <p className="text-[15px] text-gray-600 mb-6">
                  To bridge the gap between healthcare providers and
                  professionals with an intelligent and secure digital system.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6" />
                    <span className="text-gray-600 text-[15px]">
                      Digitizing the entire recruitment and credentialing
                      process
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6" />
                    <span className="text-gray-600 text-[15px]">
                      Providing real-time task tracking for professionals and
                      admins
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-blue-600 w-6 h-6" />
                    <span className="text-gray-600 text-[15px]">
                      Ensuring data security and operational transparency at
                      every level
                    </span>
                  </li>
                </ul>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Healthcare professionals"
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          <section className="py-20 bg-gray-50 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <div className="flex justify-center items-center gap-4 mb-6">
                <Building2 className="text-blue-500 w-8 h-8" />
                <h2 className="text-3xl font-bold text-gray-800">Who We Are</h2>
              </div>
              <p className="text-[15px] text-gray-700">
                We’re healthcare specialists and engineers committed to
                transforming medical staffing. We unite hospitals and healthcare
                professionals through a robust digital platform.
              </p>
            </div>

            <div className="max-w-4xl mx-auto mt-16 px-6">
              <div className="flex justify-center items-center gap-4 mb-6">
                <Briefcase className="text-blue-500 w-8 h-8" />
                <h2 className="text-3xl font-bold text-gray-800">What We Do</h2>
              </div>
              <p className="text-[15px] text-gray-700">
                We offer an end-to-end solution for healthcare staffing—from
                online applications and credential uploads to task assignments,
                tracking, and administrative reporting. Everything runs
                securely, smoothly, and efficiently.
              </p>
            </div>
          </section>

          <section className="py-20 bg-white mb-18">
            <div className="text-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                <Stethoscope className="text-blue-500 w-8 h-8" />
                <h2 className="text-3xl font-bold text-gray-800">
                  Our Core Values
                </h2>
              </div>
              <p className="text-[15px] text-gray-600 mb-12">
                These values power the decisions, designs, and outcomes of the
                Health Staff Manager platform.
              </p>
            </div>
            <Container>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8  px-4">
                {values.map((val) => {
                  const Icon = val.icon;
                  return (
                    <div
                      key={val.title}
                      className={`bg-white border border-gray-200 rounded-xl p-6 text-center shadow hover:shadow-md transition duration-300`}
                    >
                      <div
                        className={`mx-auto mb-4 w-14 h-14 flex items-center justify-center rounded-full ${val.bgColor}`}
                      >
                        <Icon className={`w-7 h-7 ${val.iconColor}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {val.title}
                      </h3>
                      <p className="mt-2 text-[15px]  text-gray-600">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Container>
          </section>
        </main>
      </div>
    </div>
  );
};

export default About;
