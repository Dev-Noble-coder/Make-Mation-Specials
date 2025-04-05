import React, { useState, useEffect } from "react";
import { Lightbulb, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import makemationImg from "../../assets/img/make-mationImg.png";

const Welcome_Section = () => {
  const [name, setName] = useState("...");
  useEffect(() => {
    setName((localStorage.getItem("userName") || "").split(" ")[1] );
  }, []);

 

  const codingMotivations = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "First, solve the problem. Then, write the code.",
    "Don't comment bad code—rewrite it.",
    "The best way to learn to code is to build something.",
  ];

  const [showNotification, setShowNotification] = useState(false);
  const [motivation, setMotivation] = useState("");

  const showMotivation = () => {
    setMotivation(
      codingMotivations[Math.floor(Math.random() * codingMotivations.length)]
    );
    setShowNotification(true);

    // Auto-hide notification after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div
      className="my-10 mx-5 relative  bg-cover bg-top  rounded-xl h-[170px]"
      style={{
        backgroundImage: `url(${makemationImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 rounded-xl"></div>

      {/* Content */}
      <div className="relative p-6 text-white ">
        <div>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl lg:text-6xl bg-gradient-to-r from-[#CD950E] to-gray-100 bg-clip-text text-transparent">
              Hello {name} !
            </h1>

            <div className="cursor-pointer" onClick={showMotivation}>
              <Lightbulb size={30} className="text-[#CD950E]" />
            </div>
          </div>

          <p className="text-md py-3 pl-1">
            Ready to learn and explore today ?
          </p>
        </div>
      </div>

      {showNotification && (
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed top-13 right-5 bg-blue-500/50 px-6 py-3 rounded-sm shadow-lg flex items-center gap-3"
        >
          <p>{motivation}</p>
          <button onClick={() => setShowNotification(false)}>
            <X size={20} className="cursor-pointer" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default Welcome_Section;
