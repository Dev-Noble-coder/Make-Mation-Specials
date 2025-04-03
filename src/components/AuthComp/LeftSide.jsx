import React from "react";

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
  Sparkles,
  Film,
  Star,
} from "lucide-react";
 import makemationImg from '../../assets/img/make-mationImg.png'

const LeftSide = () => {
  function SparkleEffect() {
    return (
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            <Star className="w-4 h-4 text-yellow-200 animate-pulse" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex-1  relative overflow-hidden">
      <img
        src={makemationImg}
        alt="Cinematic background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 to-indigo-900/95" />
      <SparkleEffect />
      <div className="absolute inset-0 flex items-center justify-center p-12">
        <div className="text-white max-w-xl relative animate-fade-in">
          <div className="flex items-center gap-3 mb-4">
            <Film className="w-8 h-8 animate-pulse text-yellow-300" />
            <h3 className="text-xl font-semibold text-yellow-300">
              MakeMation Launch Specials
            </h3>
          </div>
          <h2 className="text-4xl font-bold mb-6 animate-slide-up">
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
