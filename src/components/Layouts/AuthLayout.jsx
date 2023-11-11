import { Link } from "react-router-dom";

const AuthLayout = (props) => {
  const { children, title = "Title", type } = props;
  return (
    <div className="flex justify-center min-h-screen bg-slate-200 items-center">
      <div className="w-full bg-white shadow-xl max-w-xs border rounded-xl px-4 py-3">
        <h1 className="text-3xl font-bold mb-2 text-blue-500">{title}</h1>
        <p className="font-medium text-slate-500">Welcome please fill to {title}</p>
        {children}
        <Navigation type={type} />
      </div>
    </div>
  );
};

// Conditional rendeing with oeprator ternary
const Navigation = ({ type }) => (
  <p className="text-sm text-center text-gray-500 mt-2">
    {type === "login" ? (
      <span>
        Don't have an account?{" "}
        <Link className="text-blue-500 font-semibold" to="/register">
          Register
        </Link>
      </span>
    ) : (
      <span>
        Already have an account?{" "}
        <Link className="text-blue-500 font-semibold" to="/login">
          Login
        </Link>
      </span>
    )}
  </p>
);

export default AuthLayout;

// Conditional rendering with operator &&
// const Navigation = ({ type }) => (
//   <p className="text-sm text-center text-gray-500 mt-2">
//     {type === "login" && (
//       <span>
//         Don't have an account?{" "}
//         <Link className="text-blue-500 font-semibold" to="/register">
//           Register
//         </Link>
//       </span>
//     )}
//     {type !== "login" && (
//       <span>
//         Already have an account?{" "}
//         <Link className="text-blue-500 font-semibold" to="/login">
//           Login
//         </Link>
//       </span>
//     )}
//   </p>
// );

// Conditional rendering with operator if else
// const Navigation = ({ type }) => {
//   if (type === "login") {
//     return (
//       <p className="text-sm text-center text-gray-500 mt-2">
//         <span>
//           Don't have an account?{" "}
//           <Link className="text-blue-500 font-semibold" to="/register">
//             Register
//           </Link>
//         </span>
//       </p>
//     );
//   } else {
//     return (
//       <p className="text-sm text-center text-gray-500 mt-2">
//         <span>
//           Already have an account?{" "}
//           <Link className="text-blue-500 font-semibold" to="/login">
//             Login
//           </Link>
//         </span>
//       </p>
//     );
//   }
// };
