import React, { useEffect, useState } from "react";

function Learning_Track() {
  const tracks = [
    {
      percentage: 70,
      color: "text-blue-500",
      bg: "bg-blue-500",
      label: "HTML",
    },
    {
      percentage: 20,
      color: "text-amber-400",
      bg: "bg-amber-400",
      label: "CSS",
    },
    {
      percentage: 10,
      color: "text-green-500",
      bg: "bg-green-500",
      label: "JavaScript",
    },
  ];

  return (
    <div className=" my-10">
      <div className="bg-white px-5 py-10 rounded-md shadow-sm">
        <h2 className="text-sm font-bold mb-5 ">Learning Tracks</h2>
        <div className="flex items-center space-x-4 pb-5">
          {tracks.map((skill, index) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="text-gray-500 text-sm">{skill.label}</span>
              <span className={`w-2 h-2 rounded-full ${skill.bg}`}></span>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-evenly md:flex-row gap-12">
          {tracks.map((track, index) => (
            <ProgressCircle key={index} {...track} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressCircle({ percentage, color, label }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(percentage), 500);
    return () => clearTimeout(timer);
  }, [percentage]);

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col  items-center">
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx="48"
            cy="48"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={`${color} transition-all duration-1000 ease-out`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{progress}%</span>
        </div>
      </div>
      <span className="mt-4 text-sm font-medium">{label}</span>
    </div>
  );
}

export default Learning_Track;
