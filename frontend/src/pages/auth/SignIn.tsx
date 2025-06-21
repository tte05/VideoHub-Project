import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: [value],
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted ", formData.email, formData.password);
  };
  return (
    <Layout>
      <div className="flex items-center justify-center p-4 w-full">
        <div className="w-full max-w-md bg-white  rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Join us Today!
          </h1>
          <form action="" className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id=""
                required
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500
                          focus:border-green-500 sm:text-sm"
              value={formData.email}
              onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id=""
                required
                placeholder="Enter your password"
                className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-green-500
                          focus:border-green-500 sm:text-sm"
              value={formData.password}
              onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              className={
                "w-full py-3 px-4 bg-green-500 text-white font-bold rounded-md shadow-md transition duration-300 disabled:bg-green-300 disabled:cursor-not-allowed flex items-center justify-center"
              }
            >
              Sign Up
            </button>
          </form>
          <Link
            to={"/sign-up"}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 transition-all duration-300"
          >
            Sign up for Free
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default SignUp;
