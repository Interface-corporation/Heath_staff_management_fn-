import { useState } from "react";
import Container from "../../components/layout/Container";

const Register = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    country: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <div className="flex items-center">
        <Link to="/" className="flex-shrink-0 flex items-center">
          <Activity size={42} className="text-blue-400" />
          <span className="ml-2 text-xl font-bold">Health Staff Manager</span>
        </Link>
      </div>
    </Container>
  );
};

export default Register;
