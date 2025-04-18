import React, { useState, useRef, useEffect } from "react";
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

const OTP_Verification = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  const [userData, setUserData] = useState({
    email: "fadebayo637@gmail.com",
    otp: otp.join(),
  });

  useEffect(() => {
    setUserData((prev) => ({ ...prev, otp: otp.join("") }));
  }, [otp]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!isNaN(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to next input if value is entered
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(otp);
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
            <Link
              to="/forgot_password"
              className="text-white text-[12px] mb-5 font-semibold flex justify-start items-center gap-1 cursor-pointer"
            >
              <ArrowLeftIcon className="text-sm text-white" />
              Go Back
            </Link>
          </div>
          <h1 className="text-xl font-bold text-white mb-2">Verify OTP</h1>
          <p className="text-white mb-8 text-sm">
            Enter the code sent to verify otp
          </p>

          <form onSubmit={handleSubmit} className="">
            <div className="mb-3 ">
              <p className="pb-2 text-white">Enter code</p>
              <div className="grid grid-cols-6 gap-2 mt-1">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    value={digit}
                    placeholder="-"
                    onChange={(e) => handleChange(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    maxLength="1"
                    className="w-full h-14 text-center text-lg font-semibold border border-white  focus:outline-0 text-white"
                  />
                ))}
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
        <div className="flex-1 flex flex-col items-center justify-center p-8 relative">
          <div className="absolute top-5 right-5">
            <img src={makemationLogo} alt="" />
          </div>

          <div className="max-w-md w-full">
            <div>
              <Link
                to="/forgot_password"
                className="text-blue-600 text-[12px] mb-5 font-semibold flex justify-start items-center gap-1 cursor-pointer"
              >
                <ArrowLeftIcon className="text-sm" />
                Go Back
              </Link>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Verify OTP
            </h1>
            <p className="text-gray-600 mb-8 text-sm">
              Enter the code sent to verify otp
            </p>

            <form onSubmit={handleSubmit} className="">
              <div className="mb-3">
                <p className="pb-2">Enter code</p>
                <div className="grid grid-cols-6 gap-2 mt-1">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => (inputRefs.current[index] = el)}
                      type="text"
                      value={digit}
                      placeholder="-"
                      onChange={(e) => handleChange(e, index)}
                      onKeyDown={(e) => handleKeyDown(e, index)}
                      maxLength="1"
                      className="w-full h-14 text-center text-lg font-semibold border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ))}
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

export default OTP_Verification;
