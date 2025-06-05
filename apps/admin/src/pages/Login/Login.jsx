import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "../../../../client/src/App";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye, IoMdEyeOff, IoMdHome } from "react-icons/io";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-hot-toast";
import logo from "../../assets/logo.png";
import pattern from "../../assets/pattern.jpeg";
import api from "../../services/api";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(MyContext);
  const navigate = useNavigate();

  useEffect(() => {
    context.setisHideHeaderAndFooter(true);
    return () => context.setisHideHeaderAndFooter(false);
  }, [context]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Using Axios
      const response = await api.post("/api/user/login", credentials, {
        withCredentials: true, // THIS IS CRUCIAL
      });

      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/cdashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="container bg-gray-900">
        {/* Background Pattern */}
        <img
          src={pattern}
          alt="background pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Login Container */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="w-full max-w-lg bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Logo Header */}
            <Link to="/" className="mx-auto flex justify-center my-6">
              <button className="flex items-center justify-center py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-200">
                <IoMdHome className="mr-2" /> Homepage
              </button>
            </Link>

            <div className="bg-gradient-to-r from-orange-500 to-gray-800 p-6 text-center">
              <h2 className="mt-4 text-2xl font-bold text-white">
                Login to SCMS
              </h2>
            </div>

            {/* Login Form */}
            <div className="p-6 space-y-12 text-xl mt-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Email Field */}
                <div
                  className={`relative rounded-lg transition-all ${
                    inputIndex === 0 ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdEmail
                      className={`h-6 w-6 text-gray-200 ${
                        inputIndex == 0 ? "text-orange-400" : ""
                      }`}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={credentials.email}
                    onChange={handleChange}
                    onFocus={() => setInputIndex(0)}
                    onBlur={() => setInputIndex(null)}
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div
                  className={`relative rounded-lg transition-all ${
                    inputIndex === 1 ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiLockPasswordFill
                      className={`h-6 w-6 text-gray-200 ${
                        inputIndex == 1 ? "text-orange-400" : ""
                      }`}
                    />
                  </div>
                  <input
                    type={isShowPassword ? "text" : "password"}
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    onFocus={() => setInputIndex(1)}
                    onBlur={() => setInputIndex(null)}
                    className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setIsShowPassword(!isShowPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-400"
                  >
                    {isShowPassword ? (
                      <IoMdEyeOff className="h-5 w-5" />
                    ) : (
                      <IoMdEye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end">
                  <Link
                    to="/forgot-password"
                    className="text-orange-400 hover:text-orange-300 hover:underline"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  // disabled={isLoading}
                  className={`w-full py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </button>
              </form>

              {/* Social Login Divider */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    or continue with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center py-2 px-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-gray-300">Google</span>
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center py-2 px-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaGithub className="h-5 w-5 text-gray-300 mr-2" />
                  <span className="text-gray-300">GitHub</span>
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="px-6 py-4 bg-gray-700 text-center">
              <span className="text-gray-400">Don't have an account? </span>
              <Link
                to="/signup"
                className="font-medium text-orange-400 hover:text-orange-300 hover:underline"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <img src={logo} alt="SCMS Logo" className="relative h-20 w-auto" />
        </div>
      </div>
    </>
  );
};

export default Login;
