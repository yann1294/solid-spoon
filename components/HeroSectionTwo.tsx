import React from 'react';
import Image from 'next/image';

const HeroSectionTwo: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section (on the left side) */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/palmier.jpg"
            width={150}
            height={150}
            alt="Image"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Content Section (on the right side) */}
        <div className="lg:w-1/2 text-center lg:text-left lg:ml-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Title Here</h1>
          <p className="text-gray-700 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis libero vitae erat
            venenatis aliquam. Vestibulum faucibus ante sed tellus lobortis, a lacinia neque
            fermentum. Duis nec bibendum nisl. Nullam interdum dui vel ultricies ultrices. Nam
            vel libero sem. Cras fermentum enim a leo accumsan, et aliquet mauris mattis.
          </p>
          <button className="bg-green-500 text-white font-semibold px-8 py-3 rounded-full hover:bg-transparent hover:border-green-500 border-2 hover:text-black border-green-500 transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionTwo;
