
import Container from "../../components/layout/Container";
import { Link } from "react-router";
import { useState } from "react";
import Input from "../../components/common/Input";
import { Activity, HeartHandshake } from "lucide-react";
import Button from "../../components/common/Button";

const Login = () => {
  const[formdata,setFormdata]=useState({
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    confirmpassword:''

  });
  const hundleSubmit=(e)=>{
   e.preventDefault();
  }
  return (
    <div>
      <Container className="flex flex-col justify-center items-center h-screen">
        <div className="border-2 border-blue-200 rounded-xl shadow-xl  p-4">
        <div className="flex items-center justify-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            
            <HeartHandshake  size={42} className="text-blue-400" />
            <span className="ml-2 text-xl font-bold">Welcome back!</span>
          </Link>
        </div>
         <form onSubmit={hundleSubmit} className="mt-16">
          <div className="flex flex-col lg:flex-row gap-6">
          <Input
          label="First name"
          type="text"
          value={formdata.firstname}
          id="firstname"
          placeholder="enter your first name"
          onChange={(e)=>setFormdata(e.target.value)}
          required

          />
          <Input
          label="Last name"
          type="text"
          value={formdata.lastname}
          id="firstname"
          placeholder=" enter  your last name"
          onChange={(e)=>setFormdata(e.target.value)}
          required
          />
          </div>
         <div>
         <Input
          label="Email"
          type="email"
          value={formdata.email}
          id="email"
          placeholder=" enter  your email"
          onChange={(e)=>setFormdata(e.target.value)}
          required
          />
           <Input
          label="Password"
          type="password"
          value={formdata.password}
          id="password"
          placeholder=" enter  your password"
          onChange={(e)=>setFormdata(e.target.value)}
          required
          />
          <Input
          label=" Confirm-Password"
          type="password"
          value={formdata.confirmpassword}
          id="password"
          placeholder=" confirm  your password"
          onChange={(e)=>setFormdata(e.target.value)}
          required
          />
          
          
      
         </div>
         <div className="text-right text-blue-600">
          <Link to="./">
          forgot password ?
          </Link>
         </div>
         <div className="text-center  text-lg mt-8 ">
         <Button className="bg-blue-600 px-9 py-2 rounded-full      duration-500   cursor-pointer">Login</Button>
         </div>

         </form>
         </div>
      </Container>
    </div>
  );
};

export default Login;
