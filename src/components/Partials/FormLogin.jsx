import InputForm from "../Elements/Input";
import Button from "../Elements/Button";

const FormLogin = (props) => {
  const handleLogin = (event) => {
    event.preventDefault();
    localStorage.setItem("email", event.target.email.value);
    localStorage.setItem("password", event.target.password.value);
    window.location.href = "/products";
  };
  const { title } = props;
  return (
    <form onSubmit={handleLogin}>
      <hr className="my-5" />
      <InputForm label="Email" name="email" type="email" placeholder="Enter your email" />
      <InputForm label="Password" name="password" type="password" placeholder="Enter your password" />
      <hr className="my-5" />
      <Button classname="bg-blue-500 w-full" type="submit">
        {title}
      </Button>
    </form>
  );
};

export default FormLogin;
