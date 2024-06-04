import React from 'react';
import Image from 'next/image';

const MessageSentSuccessful: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Image */}
      <Image src="/palmier.jpg" width={150} height={150} alt="Success Image" className="w-32 h-32 mb-4" />

      {/* Text */}
      <p className="text-center text-lg text-gray-800 mb-4">Your message has been sent successfully!</p>

      {/* Green Tick Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-green-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </div>
  );
};

export default MessageSentSuccessful;
