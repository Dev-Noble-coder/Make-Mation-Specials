import React, {useState} from "react";
import { Lightbulb, X } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Welcome_Section = () => {


  const codingMotivations = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "First, solve the problem. Then, write the code.",
    "Don't comment bad code—rewrite it.",
    "The best way to learn to code is to build something."
  ];
  

    const [showNotification, setShowNotification] = useState(false);
    const [motivation, setMotivation] = useState("");
  
    const showMotivation = () => {
      setMotivation(codingMotivations[Math.floor(Math.random() * codingMotivations.length)]);
      setShowNotification(true);
  
      // Auto-hide notification after 3 seconds
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
    };
  
  return (
    <div
      className="my-10 mx-5 relative  bg-cover bg-center  rounded-xl h-[170px]"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/robot-handshake-human-background-futuristic-digital-age_53876-129770.jpg?t=st=1743364790~exp=1743368390~hmac=68da293b7bfc82f3f49da29c88cd3cedbd8e186608f0c05c2af6008e29ef6e38&w=996')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 rounded-xl"></div>

      {/* Content */}
      <div className="relative p-6 text-white ">
        <div>
          <div className="flex justify-between items-center"> 
            <h1 className="text-white text-4xl lg:text-6xl">Hello Daniel !</h1>
            <div className="cursor-pointer" onClick={showMotivation}>
            <Lightbulb size={30} className="text-yellow-300" />
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
