import React, { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  ChevronRight,
  Lock,
  Mail,
  User,
  ArrowLeftIcon,
  Calendar,
  Hash,
  FileText,
} from "lucide-react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import makemationLogo from "../assets/img/makemationLogo.png";
import LeftSide from "../components/AuthComp/LeftSide";
import { authUser } from "../apis/api_auth_user";
import { motion } from "framer-motion";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      console.log(formData);
      const result = await authUser("POST", "api/auth/login", formData);

      if (result.success) {
        toast.success("User loggedin successfully");
        setShouldNavigate(true);
        console.log(result.data);
        localStorage.setItem("loginStatus", true);
        localStorage.setItem("userName", result.data.data.user.name);
      } else {
        toast.error(result.message); // Handle error message
      }
    } catch (err) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
      setFormData({
        email: "",
        password: "",
      });
    }
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (shouldNavigate) {
      const timeout = setTimeout(() => {
        navigate("/home_dashboard");
      }, 3000);

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [shouldNavigate, navigate]); // Runs when `shouldNavigate` changes

  return (
    <div className="flex h-svh md:min-h-screen bg-gray-50 ">
      <LeftSide />
      {isMobile ? (
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex-col flex items-center justify-center py-6 px-4 md:hidden absolute bottom-0 bg-white/20 backdrop-blur-md backdrop-saturate-150 z-50 w-full rounded-t-4xl"
        >
          <div className="pb-5">
            <img src={makemationLogo} alt="" />
          </div>
          <div className="max-w-md w-full">
            <h1 className="text-xl font-bold text-white mb-2">
              Login to your account
            </h1>
            <p className="text-white mb-8 text-sm">
              Login with your email and password
            </p>

            <form onSubmit={handleSubmit} className="">
              <div className="mb-3">
                <label className="block text-sm font-medium text-white mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-white h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full text-sm px-4 py-3  border-b border-white  focus:outline-0 text-white"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white h-5 w-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 text-sm  border-b border-white  focus:outline-0 text-white"
                    placeholder=""
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white "
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center text-sm  mt-4">
                <label className="flex items-center space-x-2 text-gray-200">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot_password">
                  <a href="" className="text-white font-medium">
                    Forgot Password?
                  </a>
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 mt-8 text-sm rounded-lg hover:bg-blue-700  transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Login
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  ""
                )}
              </button>
            </form>

            <p className="mt-3 text-center text-sm text-gray-200">
              Don't have an account?{" "}
              <Link
                to="/create_account"
                className="text-white font-medium text-sm"
              >
                Sign up
              </Link>
            </p>
          </div>
        </motion.div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center p-8 relative">
          <div className="absolute top-5 right-5">
            <img src={makemationLogo} alt="" />
          </div>
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Login to your account
            </h1>
            <p className="text-gray-600 mb-8 text-sm">
              Login with your email and password
            </p>

            <form onSubmit={handleSubmit} className="">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full text-sm px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-0 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:outline-0 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex justify-between items-center text-sm  mt-4">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="w-4 h-4" />
                  <span>Remember me</span>
                </label>
                <Link to="/forgot_password">
                  <a href="" className="text-[#1B5FC1] font-medium">
                    Forgot Password?
                  </a>
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 mt-8 text-sm rounded-lg hover:bg-blue-700  transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Login
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  ""
                )}
              </button>
            </form>

            <p className="mt-3 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/create_account"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
