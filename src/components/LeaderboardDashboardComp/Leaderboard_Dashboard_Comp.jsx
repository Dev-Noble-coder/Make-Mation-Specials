import React from 'react';
import { Trophy, Medal } from 'lucide-react';

const leaderboardData = [
  { position: 1, name: "Michael Thompson", score: 9875, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 2, name: "Sarah Johnson", score: 9654, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 3, name: "James Wilson", score: 9432, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 4, name: "Emily Davis", score: 9187, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 5, name: "Robert Miller", score: 8954, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 6, name: "Jennifer Brown", score: 8765, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 7, name: "William Taylor", score: 8543, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 8, name: "Elizabeth Anderson", score: 8321, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 9, name: "David Martinez", score: 8198, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" },
  { position: 10, name: "Jessica White", score: 8076, avatar: "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?w=740" }
];

const PositionBadge = ({ position }) => {
  if (position === 1) {
    return <Trophy className="w-6 h-6 text-yellow-400" />;
  } else if (position === 2) {
    return <Medal className="w-6 h-6 text-gray-400" />;
  } else if (position === 3) {
    return <Medal className="w-6 h-6 text-amber-700" />;
  }
  return <span className="font-bold text-gray-600">{position}</span>;
};

function Leaderboard_Dashboard_Comp() {
  return (
    <div className=" bg-gray-100 p-4 sm:p-6 lg:p-8">
    <div className=" mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Top 10 Users</h1>
      
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Player
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Score
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {leaderboardData.map((player) => (
                <tr 
                  key={player.position} 
                  className={`${
                    player.position <= 3 ? 'bg-gray-50' : ''
                  } transition-colors hover:bg-gray-50`}
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-8">
                        <PositionBadge position={player.position} />
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <img 
                        className="h-10 w-10 rounded-full object-cover bg-gray-100" 
                        src={player.avatar} 
                        alt={player.name}
                      />
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {player.name}
                          {player.position <= 3 && (
                            <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                              Top 3
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {player.score.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Leaderboard_Dashboard_Comp;
