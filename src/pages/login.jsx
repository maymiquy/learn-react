import { Link } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormLogin from "../components/Partials/FormLogin";

const LoginPage = (props) => {
  const {} = props;
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin title="Login" />
    </AuthLayout>
  );
};

export default LoginPage;
