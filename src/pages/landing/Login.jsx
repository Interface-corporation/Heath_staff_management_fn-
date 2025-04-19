import Container from "../../components/layout/Container";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../../components/common/Input";
import { HeartHandshake } from "lucide-react";
import Button from "../../components/common/Button";

const Login = () => {
  const navigate = useNavigate();

  const [formdata, setFormdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    role: "",
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

    if (formdata.password !== formdata.confirmpassword) {
      alert("Passwords do not match!");
      return;
    }

    switch (formdata.role) {
      case "worker":
        navigate("/worker-dashboard");
        break;
      case "applicant":
        navigate("/applicant-dashboard");
        break;
      case "admin":
        navigate("/admin-dashboard");
        break;
      default:
        alert("Please select a role.");
        break;
    }
  };

  return (
    <Container className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 to-white px-4 ">
      <div className="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8 sm:p-10 md:p-12 mt-24 space-y-6">
        {/* Header */}
        <div className="text-center">
          <Link
            to="/"
            className="flex items-center justify-center text-blue-500 hover:text-blue-600"
          >
            <HeartHandshake size={40} />
            <span className="ml-3 text-2xl sm:text-3xl font-bold">
              Welcome Back!
            </span>
          </Link>
          <p className="mt-2 text-gray-600 text-sm sm:text-base">
            Please login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              label="First Name"
              type="text"
              id="firstname"
              value={formdata.firstname}
              placeholder="John"
              onChange={handleChange}
              required
            />
            <Input
              label="Last Name"
              type="text"
              id="lastname"
              value={formdata.lastname}
              placeholder="Doe"
              onChange={handleChange}
              required
            />
          </div>

          <Input
            label="Email"
            type="email"
            id="email"
            value={formdata.email}
            placeholder="example@email.com"
            onChange={handleChange}
            required
          />

          <Input
            label="Password"
            type="password"
            id="password"
            value={formdata.password}
            placeholder="Enter your password"
            onChange={handleChange}
            required
          />

          <Input
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            value={formdata.confirmpassword}
            placeholder="Re-enter your password"
            onChange={handleChange}
            required
          />

          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select Role
            </label>
            <select
              id="role"
              value={formdata.role}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            >
              <option value="">-- Choose Role --</option>
              <option value="worker">Worker</option>
              <option value="applicant">Applicant</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-blue-600">
            <Link to="/" className="hover:underline">
              Forgot password?
            </Link>
            <span>
              Need an account?{" "}
              <Link to="/register" className="underline">
                Register
              </Link>
            </span>
          </div>

          <div className="text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full transition-all duration-300">
              Login
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
