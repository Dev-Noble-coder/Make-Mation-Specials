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
import makemationLogo from '../../assets/img/makemationLogo.png'

const RightSide = () => {
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    age: "",
    dob: "",
    text: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      // Handle final submission
      console.log("Form submitted:", formData);
      setFormData({
        email: "",
        password: "",
        name: "",
        age: "",
        dob: "",
        text: "",
      })
    }
  };

  return (
    <div className="flex-1 flex items-center justify-center p-8 relative">
      <div className="absolute top-5 right-5">
        <img src={makemationLogo} alt="" />
      </div>
      <div className="max-w-md w-full">
        <p
          className="text-blue-600 text-[12px] mb-5 font-semibold flex justify-start items-center gap-1 cursor-pointer"
          onClick={() => setStep(step - 1)}
        >
          {step === 1 ? "" : <ArrowLeftIcon className="text-sm" />}
          {step === 1 ? "" : "Go Back"}
        </p>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {step === 1 ? "Create your account" : "Complete your profile"}
        </h1>
        <p className="text-gray-600 mb-8 text-sm">
          {step === 1
            ? "Start with your email and password"
            : "Just a few more details"}
        </p>

        <form onSubmit={handleSubmit} className="">
          {step === 1 ? (
            <>
                <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-0  focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>
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
            </>
          ) : (
            <>
          

              {/* Age Input */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age
                </label>
                <div className="relative">
                  <Hash className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your age"
                  />
                </div>
              </div>

              {/* Date of Birth Input */}
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date of Birth
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                    className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Why you think this is a great opportunity ?
                </label>
                <div className="relative">
                 
                  <input
                    type="text"
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    required
                    className="pl-5 w-full px-4 py-3 rounded-lg border border-gray-300 text-sm focus:outline-0  focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder=""
                  />
                </div>
              </div>

            
            </>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 mt-8 text-sm rounded-lg hover:bg-blue-700  transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            {step === 1 ? "Continue" : "Create Account"}
            {step === 1 ?   <ChevronRight className="h-5 w-5" /> : ""}
          
          </button>
        </form>

        <p className="mt-3 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/"
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RightSide;
