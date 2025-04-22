import { useState } from "react";
import { ActivityIcon } from "lucide-react";
import Container from "../../components/layout/Container";
import Navbar from "../../components/layout/Navbar";
import Input from "../../components/common/Input";
import DepartmentSelection from "../../components/layout/DepartmentSelection";

const ApplyPage = () => {
  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    Zipcode: "",
    position:"",
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormdata((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex flex-col mt-18">
      <Navbar />
      <main>
        <section className="text-white py-20 bg-gradient-to-br from-[#00A2E8] to-[#5FB3B3]">
          <Container className="px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Would you like to put your skills to good use?
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Do not hesitate to submit your application to us, our recruitment
              department will contact you for more details
            </p>
          </Container>
        </section>
        <section>
          <Container>
            <div className="max-w-3xl mx-auto mt-24 text-start">
              <p>
                Take a moment to fill out this quick form; It's designed to help
                us understand exactly what you're looking for. One of our
                recruiters will contact you immediately to discuss your career
                aspirations in depth and offer you opportunities that are
                perfectly aligned with your ambitions. We look forward to
                supporting you in the next step of your career!
              </p>
            </div>
            <div className=" max-w-3xl mx-auto mt-24  flex flex-col justify-center items-center ">
              <ActivityIcon className="h-16 w-16 border-2 border-blue-500 rounded-full p-2 text-blue-500" />
              <h1 className="mt-12 text-xl font-bold">
                Application submission form
              </h1>
              <div className="max-w-xl text-center mt-3">
                <p>
                  As soon as you have filled out this form, one of our
                  recruiters will contact you without delay!
                </p>
              </div>
            </div>
            <div className=" text-start mt-12">
              <form onSubmit={handleSubmit} className="max-w-xl  mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Input
                    label="First Name"
                    type="text"
                    id="firstname"
                    value={formdata.firstname}
                    onChange={handleChange}
                    placeholder="John"
                    required
                  />
                  <Input
                    label="Last Name"
                    type="text"
                    id="lastname"
                    value={formdata.lastname}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                  />
                </div>
               
                <Input
                  label="Email"
                  type="text"
                  id="email"
                  value={formdata.email}
                  onChange={handleChange}
                  placeholder="example@mail.com"
                  required
                />
                 <p className="text-sm text-gray-700 mt-3 mb-3">We'll use this to contact you about your application</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <Input
                    label="Telephone"
                    type="number"
                    id="telephone"
                    value={formdata.telephone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    required
                  />
                  <Input
                    label="Zip code"
                    type="text"
                    id="ZipCode"
                    value={formdata.Zipcode}
                    onChange={handleChange}
                    placeholder="Enter your postal code"
                    required
                  />
                </div>
                <select
              id="position"
              value={formdata.position}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            >
              <option value="">-- Choose your position --</option>
              <option value="worker">Clinical Nurse</option>
              <option value="admin">Licensed Practical Nurse</option>
              <option value="admin">Beneficiary Attendant</option>
              <option value="admin">Health and Social Services Assistant</option>
              <option value="admin">Physiotherapist</option>
              <option value="admin">Respiratory Therapist</option>
              <option value="admin">Occupational Therapist</option>
              <option value="admin">Institutional Supervisor</option>
              <option value="admin">Cleaning Attendant</option>
              

            </select>
           
             <DepartmentSelection/>
              </form>
              
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
};

export default ApplyPage;
