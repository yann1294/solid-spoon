import React from 'react';
import Image from 'next/image';

const Vision: React.FC = () => {
  return (
    <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Centered Image */}
      <div className="max-w-7xl mx-auto mb-8">
        <Image src="/vision.jpg" width={120} height={120} alt="Centered Image" className="w-full h-auto rounded-lg" />
      </div>

      {/* Two Columns */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2">
        {/* Column 1 */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Vision</h2>
          <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, nemo ipsum. Iusto dolorum exercitationem modi itaque culpa necessitatibus quae incidunt consequuntur dolorem aut, quos assumenda! Commodi reprehenderit quod ducimus iusto.</p>
        </div>
        
        {/* Column 2 */}
        <div className="bg-gray-100 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Mission</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus excepturi quidem perferendis sint corrupti eaque similique debitis est ipsam. Alias aliquam delectus cumque autem voluptate ullam saepe numquam, eos assumenda.
          </p>
        </div>
      </div>

      {/* Centered Button */}
      <div className="max-w-7xl mx-auto mt-8 text-center">
        <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-transparent hover:text-black hover:border-green-500 border-2 border-green-500 transition duration-300">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default Vision;
