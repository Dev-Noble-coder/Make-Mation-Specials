import React from "react";
import { Lightbulb } from "lucide-react";

const Welcome_Section = () => {
  return (
    <div
      className="my-10 mx-8 relative  bg-cover bg-center  rounded-xl h-[200px]"
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
            <h1 className="text-white text-6xl">Hello Daniel !</h1>
            <div className="">
              <Lightbulb size={30} className="text-yellow-300" />
            </div>
          </div>

          <p className="text-md py-3 pl-1">
            Ready to learn and explore today ?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome_Section;
