import Button from '@/utils/Button';
import React from 'react';

import soutien from '@/components/LandingPage3.module.css'

const LandingPage3: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                {/* Video Section (on the left side) */}
                <div className="lg:w-1/2 mb-8 lg:mb-0 bg-green-600">
                    <div className={soutien.nous_soutenir}>

                    </div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged.

                    <div className="text-center mt-8 ">
                        <Button>Click me</Button>
                    </div>

                </div>

                {/* Text Section (on the right side) */}
                <div className="lg:w-1/2 text-center lg:text-left lg:ml-8 bg-green-600">
                    {/* Icons Section */}
                    <div className={soutien.nous_soutenir}>

                    </div>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                    essentially unchanged.

                    <div className="text-center mt-8 ">
                        <Button>Click me</Button>
                    </div>

                </div>


            </div>

            {/* Button Section (Centered Below Sections) */}

            <div className="flex flex-row justify-center  mb-4">
                {/* Icon Rectangle */}
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="bg-green-500 rounded-3xl mx-8 my-6 p-8 mr-4">
                        {/* Paragraph */}
                        <p className="text-white text-lg font-bold">+355</p>
                        {/* Icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-white mb-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                        </svg>
                    </div>
                ))}
                {/* Repeat this block for each icon */}
                {/* Add more icons as needed */}
            </div>

        </div>
    );
};

export default LandingPage3;
