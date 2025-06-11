import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaUserCircle, FaGoogle, FaGithub } from "react-icons/fa";
import { IoMdEye, IoMdEyeOff, IoMdHome } from "react-icons/io";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import logo from "../../assets/logo.png";
import pattern from "../../assets/pattern.jpeg";
import { RiLockPasswordFill } from "react-icons/ri";
import api from "../../services/api";
import toast from "react-hot-toast";
import { AppContext } from "../../context/AppContext";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    agreeTerms: false,
  });
  const [inputIndex, setInputIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {setisHideHeaderAndFooter} = useContext(AppContext);
  const navigate = useNavigate();

  useEffect(() => {
    setisHideHeaderAndFooter(true);
    window.scrollTo(0, 0);
    return () => setisHideHeaderAndFooter(false);
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Replace with your actual signup API call
      // const response = await axios.post("/api/auth/signup", formData);
      const response = await api.post("api/user/register", formData);
      toast.success("Account created successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      navigate("/cdashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed", {
        position: "top-right",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container bg-gray-900">
      {/* Background Pattern */}
      <img
        src={pattern}
        alt="background pattern"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />

      {/* Signup Container */}
      <div className="w-full relative z-10 flex items-center justify-center min-h-screen p-4 text-xl">
        <div className="w-full bg-gray-800 rounded-xl shadow-white-lg flex flex-col md:flex-row  py-12">
          {/* Left Side - Marketing Content */}
          <div className="w-full bg-gradient-to-br from-orange-600 to-gray-800 p-8 flex flex-col justify-center px-12">
            <h1 className="text-3xl font-bold text-white mb-4 ">
              BEST UI/UX{" "}
              <span className="text-orange-300">PROJECT DASHBOARD</span> & ADMIN
              PANEL
            </h1>
            <p className="text-gray-300 mb-6">
              This admin panel consists of all the features to manage the
              personal projects and post into sallujs website.
            </p>
            <Link to="/" className="ml-0">
              <button className="flex items-center justify-center py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-200">
                <IoMdHome className="mr-2" /> Go To Home
              </button>
            </Link>
          </div>

          {/* Right Side - Signup Form */}
          <div className="w-2/3">
            <div className="w-11/12 px-6 ">
              {/* Logo Header */}
              <div className="text-center mb-6">
                <img
                  src={logo}
                  alt="SCMS Logo"
                  className="mx-auto h-20 w-auto mb-6"
                />
                <h2 className="text-2xl font-bold text-gray-200 uppercase">
                  Create Account
                </h2>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-8 mt-8">
                {/* Name Field */}
                <div
                  className={`relative rounded-lg transition-all ${
                    inputIndex === 0 ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUserCircle
                      className={`h-5 w-5 text-gray-200 ${
                        inputIndex === 0 ? "text-orange-400" : ""
                      }`}
                    />
                  </div>
                  <input
                    type="text"
                    name="username"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setInputIndex(0)}
                    onBlur={() => setInputIndex(null)}
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your username"
                    required
                    autoFocus
                  />
                </div>

                {/* Email Field */}
                <div
                  className={`relative rounded-lg transition-all ${
                    inputIndex === 1 ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MdEmail
                      className={`h-5 w-5 text-gray-200 ${
                        inputIndex === 1 ? "text-orange-400" : ""
                      }`}
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setInputIndex(1)}
                    onBlur={() => setInputIndex(null)}
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Password Field */}
                <div
                  className={`relative rounded-lg transition-all ${
                    inputIndex === 2 ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <RiLockPasswordFill
                      className={`h-5 w-5 text-gray-200 ${
                        inputIndex === 2 ? "text-orange-400" : ""
                      }`}
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onFocus={() => setInputIndex(2)}
                    onBlur={() => setInputIndex(null)}
                    className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-400"
                  >
                    {showPassword ? (
                      <IoMdEyeOff className="h-5 w-5" />
                    ) : (
                      <IoMdEye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Confirm Password Field */}
                <div
                  className={`relative rounded-lg transition-all ${
                    inputIndex === 3 ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <IoShieldCheckmarkSharp
                      className={`h-5 w-5 text-gray-200 ${
                        inputIndex === 3 ? "text-orange-400" : ""
                      }`}
                    />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    onFocus={() => setInputIndex(3)}
                    onBlur={() => setInputIndex(null)}
                    className="w-full pl-10 pr-10 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Confirm your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-400"
                  >
                    {showConfirmPassword ? (
                      <IoMdEyeOff className="h-5 w-5" />
                    ) : (
                      <IoMdEye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                {/* Phone Field */}
                <div
                  className={`relative rounded-lg transition-all ${
                    inputIndex === 4 ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUserCircle
                      className={`h-5 w-5 text-gray-200 ${
                        inputIndex === 4 ? "text-orange-400" : ""
                      }`}
                    />
                  </div>
                  <input
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    onFocus={() => setInputIndex(4)}
                    onBlur={() => setInputIndex(null)}
                    className="w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your phone"
                    required
                    autoFocus
                  />
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    className="h-5 w-5 text-orange-600 focus:ring-orange-500 border-gray-600 rounded"
                    required
                  />
                  <label className="ml-2 block text-gray-300">
                    I agree to the{" "}
                    <Link
                      to="/terms"
                      className="text-orange-400 hover:underline"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-3 px-4 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                    isLoading ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isLoading ? "Creating Account..." : "Sign Up"}
                </button>
              </form>

              {/* Social Login Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-600"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-2 bg-gray-800 text-gray-400">
                    or sign up with
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-1 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center py-2 px-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <FaGoogle className="h-5 w-5 text-red-500 mr-2" />
                  <span className="text-gray-300">Sign up with Google</span>
                </button>
              </div>

              {/* Login Link */}
              <div className="mt-6 text-center">
                <span className="text-gray-400">Already have an account? </span>
                <Link
                  to="/login"
                  className="font-medium text-orange-400 hover:text-orange-300 hover:underline"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
