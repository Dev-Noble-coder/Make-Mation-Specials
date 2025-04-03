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

import LeftSide from '../components/AuthComp/LeftSide'

const Login = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    
    });
  
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
        password: "",
      
      })
    
  };

  return (
    <div className="hidden md:flex min-h-screen bg-gray-50 ">
      <LeftSide />
      <div className="flex-1 flex items-center justify-center p-8">
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
            
       

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 mt-8 text-sm rounded-lg hover:bg-blue-700  transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            Login
          
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
    </div>
  )
}

export default Login
