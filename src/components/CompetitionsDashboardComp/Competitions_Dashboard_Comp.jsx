import React from "react";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import { Trophy, Calendar, Users, ExternalLink } from "lucide-react";

const Competitions_Dashboard_Comp = () => {
    const competitions = [
        {
          id: "1",
          title: "Frontend Masters Challenge",
          description: "Showcase your front-end skills by building beautiful, responsive UIs.",
          date: "October 20-22, 2025",
          participants: "600+",
          prize: "$20,000",
          image:
            "https://img.freepik.com/premium-photo/medium-shot-woman-working-laptop_23-2150323516.jpg?w=996",
          category: "Front-End Development",
        },
        {
          id: "2",
          title: "CSS Battle Royale",
          description:
            "Compete with other devs to replicate designs using only HTML and CSS.",
          date: "December 10-12, 2025",
          participants: "350+",
          prize: "$5,000",
          image:
            "https://img.freepik.com/free-photo/close-up-image-programer-working-his-desk-office_1098-18707.jpg?t=st=1744206455~exp=1744210055~hmac=506f6ad36192f20ad4f1fffcf02c715c80da8e100618b0285edc5174e39aaba7&w=996",
          category: "UI/UX Design",
        },
        {
          id: "3",
          title: "React Builders Hackathon",
          description: "Create fast, interactive web apps using React and modern libraries.",
          date: "January 15-17, 2026",
          participants: "450+",
          prize: "$25,000",
          image:
            "https://img.freepik.com/premium-vector/hackathon-hack-marathon-coding-event-glitch-poster-saturated-binary-data-code-flux_102902-967.jpg?w=996",
          category: "React Development",
        },
      ];
      

  const handleCompetitionClick = () => {
    toast.success('Competitions Coming Soon !')
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1
            className="text-4xl font-bold text-gray-900 mb-4"
          
          >
            Upcoming Competitions
          </h1>
          <p className="text-lg text-gray-600">
            Showcase your skills and win amazing prizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {competitions.map((competition) => (
            <div
              key={competition.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer "
              onClick={handleCompetitionClick}
            >
              <div className="relative h-48">
                <img
                  src={competition.image}
                  alt={competition.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-700">
                  {competition.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  {competition.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{competition.description}</p>

                <div className="space-y-2 ">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Calendar className="w-5 h-5 mr-2" />
                    <span>{competition.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="w-5 h-5 mr-2" />
                    <span>{competition.participants} Participants</span>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Trophy className="w-5 h-5 mr-2" />
                    <span>{competition.prize} in Prizes</span>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <button className="flex items-center text-[#CD950E]  transition-colors text-sm">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                  <span className="text-sm text-gray-500">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competitions_Dashboard_Comp;
