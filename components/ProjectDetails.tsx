import React from 'react';
import Image from 'next/image';
// Define interface for partner
interface Partner {
  name: string;
  logoUrl: string;
}

// Sample partners data
const partners: Partner[] = [
  { name: 'Partner 1', logoUrl: '/logo.png' },
  { name: 'Partner 2', logoUrl: '/logo.png' },
  { name: 'Partner 3', logoUrl: '/logo.png' },
  // Add more partners as needed
];

const ProjectDetails: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column */}
          <div className="md:col-span-1">
            <Image width={150} height={150} src="/logo.png" alt="Project Left" className="w-full rounded-lg" />
          </div>

          {/* Middle column */}
          <div className="md:col-span-1">
            <div className="flex flex-col justify-center h-full">
              <p className="text-lg font-semibold mb-4">Project Description</p>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis
                laoreet faucibus.
              </p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="md:col-span-1">
            <Image width={150} height={150} src="/logo.png" alt="Project Right" className="w-full rounded-lg" />
          </div>
        </div>

        {/* Partners Slider */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Our Partners</h2>
          <div className="flex space-x-4 overflow-x-auto scrollbar-hidden">
            {partners.map((partner, index) => (
              <div key={index} className="flex-shrink-0">
                <Image width={150} height={150} src={partner.logoUrl} alt={partner.name} className="h-16 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
