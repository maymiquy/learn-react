import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormRegister = (props) => {
  const { title } = props;
  return (
    <form action="">
      <hr className="my-5" />
      <InputForm label="Username" name="username" type="name" placeholder="Enter your name" />
      <InputForm label="Email" name="email" type="email" placeholder="Enter your email" />
      <InputForm label="Password" name="password" type="password" placeholder="Enter your password" />
      <InputForm label="Confirm Password" name="confirmPassword" type="password" placeholder="Enter your password" />
      <hr className="my-5" />
      <Button classname="bg-blue-500 w-full">{title}</Button>
    </form>
  );
};

export default FormRegister;
