import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    setPass: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const response = await axios
      .post("https://reqres.in/api/login", {
        email: values.username,
        password: values.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("dashboard");
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(response);
  };

  return (
    <div className="w-full  h-screen flex justify-center items-center">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/4"
        onSubmit={handleSubmit}
      >
        <div className="text-center text-xl font-bold font-sans">SignIn</div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="******************"
            onChange={handleChange}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center items-center m-auto"
            type="submit"
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
