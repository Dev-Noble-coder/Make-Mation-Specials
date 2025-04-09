import React, { useMemo } from "react";
import {
  Sparkles,
  Film,
  Star,
} from "lucide-react";
import makemationImg from '../../assets/img/make-mationImg.png';

// Pre-generate star positions
const STAR_COUNT = 20;
const starPositions = Array.from({ length: STAR_COUNT }, () => ({
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  duration: 5 + Math.random() * 5,
  delay: Math.random() * 5
}));

const LeftSide = () => {
  // Memoized SparkleEffect component
  const SparkleEffect = () => {
    const stars = useMemo(() => (
      <div className="absolute inset-0 pointer-events-none">
        {starPositions.map((position, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: position.left,
              top: position.top,
              animation: `float ${position.duration}s linear infinite`,
              animationDelay: `${position.delay}s`
            }}
          >
            <Star className="w-4 h-4 text-yellow-200 animate-pulse" />
          </div>
        ))}
      </div>
    ), []); // Empty dependency array means this will only be created once

    return stars;
  };

  return (
    <div className="flex-1 relative overflow-hidden">
      <img
        src={makemationImg}
        alt="Cinematic background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-indigo-900/90" />
      <SparkleEffect />
      <div className="absolute inset-0 flex items-center justify-center p-5 md:p-12">
        <div className="text-white max-w-xl relative animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-8 h-8 animate-pulse text-yellow-300" />
            <h3 className=" text-md md:text-xl font-semibold text-yellow-300">
              MakeMation Launch Specials
            </h3>
          </div>
          <h2 className="text-xl md:text-4xl font-bold mb-6 animate-slide-up">
            Be Part of the Onboarding
          </h2>
          <p className="text-md mb-6 text-gray-200 animate-slide-up delay-100">
            Join the groundbreaking opportunities of Africa's First AI Movie
          </p>
          <div className="space-y-4 text-gray-300 animate-slide-up delay-200 text-sm">
            <p className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              Pioneered by Mrs Toyosi Akerele Ogunsiji
            </p>
            <p className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              Revolutionary AI-powered storytelling
            </p>
            <p className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              Join our creative community
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;