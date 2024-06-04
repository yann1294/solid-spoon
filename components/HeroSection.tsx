import Button from '@/utils/Button';
import React from 'react';
import  styles from '@/components/HeroSection.module.css';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
            {/* Video Section (on the left side)
        <div className="lg:w-1/2 mb-8 lg:mb-0 img1"> */}
            <div className={styles.img1}>

            </div>

            {/* Text Section (on the right side) */}
            <div className="lg:w-1/2 text-center lg:text-left lg:ml-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-20">Ton joli texte ici</h1>
                {/* Icons Section */}
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged.
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more
                recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                <div className="text-center mt-8 ">
                    <Button>Rejoins-nous</Button>
                </div>

            </div>
        </div>

        {/* Button Section (Centered Below Sections) */}

    </div>
  );
};

export default HeroSection;
