import { Link } from "react-router-dom";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormRegister from "../components/Partials/FormRegister";

const RegisterPage = (props) => {
  const {} = props;
  return (
    <AuthLayout title="Register" type="register">
      <FormRegister title="Register" />
    </AuthLayout>
  );
};

export default RegisterPage;
