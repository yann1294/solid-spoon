import React from 'react';
import Image from 'next/image';

// Define a type for team member
interface TeamMember {
  name: string;
  position: string;
  imageUrl: string;
}

// Sample team members data
const teamMembers: TeamMember[] = [
  {
    name: 'John Doe',
    position: 'CEO',
    imageUrl: '/john.jpg',
  },
  {
    name: 'Jane Smith',
    position: 'CTO',
    imageUrl: '/john.jpg',
  },
  // Add more team members as needed
];

const Team: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Our Team</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={95}
                height={95}
                className="rounded-full h-32 w-32 object-cover mb-4"
              />
              <div className="text-center">
                <h2 className="text-lg font-semibold">{member.name}</h2>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
