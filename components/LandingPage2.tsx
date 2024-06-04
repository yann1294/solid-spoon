import Button from '@/utils/Button';
import React from 'react';
import styles from "@/components/LandingPage2.module.css";

const LandingPage2: React.FC = () => {
    return (
        <div className="bg-white text-gray-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between">
                {/* Video Section (on the left side) */}
                <div className={styles.my_img}>

                </div>

                {/* Text Section (on the right side) */}
                <div className="lg:w-1/2 text-center lg:text-left lg:ml-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">Ton texte ici</h1>
                    {/* Icons Section */}
                    <p className={styles.para1}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining
                        essentially unchanged.</p>
                    <p className={styles.para1}>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more
                        recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining
                    </p>
                    <p className={styles.para3}>
                        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                        passages, and
                        more
                        recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                        Ipsum.
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                        It has survived not only five centuries, but also the leap into electronic typesetting,
                        remaining
                    </p>
                   </div>
            </div>

            {/* Button Section (Centered Below Sections) */}

        </div>
    );
};

export default LandingPage2;
