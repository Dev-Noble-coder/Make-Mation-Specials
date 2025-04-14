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


const Forgot_Passsword = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
  });

    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);
  

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    setFormData({
      email: "",
    });
  };
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
          <div>
            <Link to ='/' className="text-white text-[12px] mb-5 font-semibold flex justify-start items-center gap-1 cursor-pointer">
              <ArrowLeftIcon className="text-sm" />
              Go Back
            </Link>
          </div>
          <h1 className="text-xl font-bold text-white mb-2">
            Forgot Password
          </h1>
          <p className="text-white mb-8 text-sm">
            Enter email to get reset code
          </p>

          <form onSubmit={handleSubmit} className="">
            <div className="mb-3 text-white">
              <label className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2  h-5 w-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="pl-10 w-full text-sm px-4 py-3  border-b border-white  focus:outline-0 text-white"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 mt-8 text-sm rounded-lg hover:bg-blue-700  transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              Send Code
            </button>
          </form>
        </div>
      
        </motion.div>
      ) : (
        <div className="hidden md:flex flex-1 flex-col items-center justify-center p-8 relative">
          <div className="absolute top-5 right-5">
            <img src={makemationLogo} alt="" />
          </div>

          <div className="max-w-md w-full">
            <div>
              <Link
                to="/"
                className="text-blue-600 text-[12px] mb-5 font-semibold flex justify-start items-center gap-1 cursor-pointer"
              >
                <ArrowLeftIcon className="text-sm" />
                Go Back
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Forgot Password
            </h1>
            <p className="text-gray-600 mb-8 text-sm">
              Enter email to get reset code
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

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-4 mt-8 text-sm rounded-lg hover:bg-blue-700  transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                Send Code
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forgot_Passsword;
