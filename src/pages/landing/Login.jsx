import { Activity } from "lucide-react";
import Container from "../../components/layout/Container";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <Container className="">
        <div className="flex items-center">
          <Link to="/" className="flex-shrink-0 flex items-center">
            <Activity size={42} className="text-blue-400" />
            <span className="ml-2 text-xl font-bold">Health Staff Manager</span>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default Login;
