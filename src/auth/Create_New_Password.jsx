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
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import makemationLogo from "../assets/img/makemationLogo.png";
import LeftSide from "../components/AuthComp/LeftSide";
import toast from "react-hot-toast";

const Create_New_Password = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password === formData.confirm_password) {
      console.log("Form submitted:", formData);
      setFormData({
        password: "",
        confirm_password: "",
      });
    } else {
      toast.error("Passwords do not match!");
    }
  };

  return (
    <div className="flex  h-svh md:min-h-screen bg-gray-50 ">
      <LeftSide />
      {isMobile ? (
        <motion.div
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 flex-col flex items-center justify-center py-6 px-4 md:hidden absolute bottom-0 bg-white/20 backdrop-blur-md backdrop-saturate-150 z-50 w-full rounded-t-4xl"
        >
          \
          <div className="pb-5">
            <img src={makemationLogo} alt="" />
          </div>
          <div className="max-w-md w-full">
            <h1 className="text-xl font-bold text-white mb-2">
              Create New Password
            </h1>
            <p className="text-white mb-8 text-sm">
              Enter your new password
            </p>

            <form onSubmit={handleSubmit} className="">
              <div className="mb-3">
                <label className="block text-sm font-medium text-white mb-2">
                  Password
                </label>
                <div className="relative text-white">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white h-5 w-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 text-sm border-b border-white  focus:outline-0 text-white"
                    placeholder="Create a password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-white" />
                    ) : (
                      <Eye className="h-5 w-5 text-white" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-white h-5 w-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 text-sm border-b border-white  focus:outline-0 text-white"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-white" />
                    ) : (
                      <Eye className="h-5 w-5 text-white" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 mt-8 text-sm rounded-lg hover:bg-blue-700  transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Create new password
              </button>
            </form>
          </div>
        </motion.div>
      ) : (
        <div className="flex-1 flex items-center justify-center p-8 relative">
          <div className="absolute top-5 right-5">
            <img src={makemationLogo} alt="" />
          </div>
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Create New Password
            </h1>
            <p className="text-gray-600 mb-8 text-sm">
              Enter your new password
            </p>

            <form onSubmit={handleSubmit} className="">
              <div className="mb-3">
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
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirm_password"
                    value={formData.confirm_password}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:outline-0 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Confirm your password"
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

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 mt-8 text-sm rounded-lg hover:bg-blue-700  transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Create new password
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Create_New_Password;
