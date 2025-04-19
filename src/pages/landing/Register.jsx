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
    
    </Container>
  );
};

export default Register;
