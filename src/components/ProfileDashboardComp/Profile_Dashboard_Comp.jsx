import React from 'react';
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Link as LinkIcon, 
  Edit, 
  Settings,
  Camera,
  Briefcase,
  Users,
  BookOpen,
  Star
} from 'lucide-react';

function Profile_Dashboard_Comp() {
  return (
    <div className=" bg-gray-50">

      <main className=" mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="relative h-48 bg-gradient-to-r from-[#CD950E] to-[#E5B44C]">
                <button className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/30 text-white transition">
                  <Camera className="w-5 h-5" />
                </button>
              </div>
              <div className="relative px-6 pb-6">
                <div className="relative -mt-16 mb-4">
                  <img
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                    src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740"
                    alt="Profile"
                  />
                  <button className="absolute bottom-0 right-0 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition">
                    <Edit className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Sarah Anderson</h2>
                <p className="text-[#CD950E] font-medium">Senior Product Designer</p>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    San Francisco, CA
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Mail className="w-5 h-5 mr-2" />
                    sarah.anderson@example.com
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-2" />
                    Joined January 2022
                  </div>
                </div>

                <div className="mt-6 flex space-x-3">
                  <button className="flex-1 bg-[#CD950E] text-white px-4 py-2 rounded-md hover:bg-[#B78100] transition">
                    Edit Profile
                  </button>
                  <button className="p-2 border border-[#CD950E] rounded-md hover:bg-[#CD950E]/10 transition">
                    <Settings className="w-5 h-5 text-[#CD950E]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 grid grid-cols-1 ">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#CD950E]">About</h3>
                <button className="text-[#CD950E] hover:text-[#B78100]">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <p className="text-gray-600 text-sm">
                Passionate product designer with over 8 years of experience in creating user-centered digital experiences. 
                Specialized in UI/UX design, design systems, and cross-functional team collaboration.
              </p>
            </div>

       

            {/* Skills */}
            <div className="bg-white rounded-lg shadow p-6 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-[#CD950E]">Skills</h3>
                <button className="text-[#CD950E] hover:text-[#B78100]">
                  <Edit className="w-4 h-4" />
                </button>
              </div>
              <div className="flex flex-wrap gap-2 ">
                {['UI Design', 'UX Design', 'Figma', 'Design Systems', 'Prototyping', 'User Research', 'Adobe XD', 'Sketch'].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#CD950E]/10 text-[#CD950E] rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className=" bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-[#CD950E] mb-4">Statistics</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-[#CD950E]/10 rounded-full">
                    <Users className="w-6 h-6 text-[#CD950E]" />
                  </div>
                  <div className="mt-2">
                    <div className="text-2xl font-bold text-gray-900">2.4k</div>
                    <div className="text-sm text-gray-600">Followers</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-[#CD950E]/10 rounded-full">
                    <BookOpen className="w-6 h-6 text-[#CD950E]" />
                  </div>
                  <div className="mt-2">
                    <div className="text-2xl font-bold text-gray-900">32</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 mx-auto bg-[#CD950E]/10 rounded-full">
                    <BookOpen className="w-6 h-6 text-[#CD950E]" />
                  </div>
                  <div className="mt-2">
                    <div className="text-2xl font-bold text-gray-900">32</div>
                    <div className="text-sm text-gray-600">Projects</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Profile_Dashboard_Comp;