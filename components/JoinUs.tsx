import React from 'react';
import ContactForm from './ContactForm';

const JoinUs: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Left Column */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h1 className="text-3xl font-bold mb-6">Join Us Today!</h1>
          <h2 className="text-lg text-gray-600 font-semibold mb-4">Become a part of our community</h2>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero quis
            laoreet faucibus.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis eius quisquam minus qui dicta atque consequatur suscipit mollitia ducimus? Alias amet adipisci mollitia odio ab, corporis expedita neque debitis nisi.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo quaerat. Amet magnam illum pariatur itaque voluptatem. Repellendus ex, unde aliquam, suscipit illum inventore esse, reiciendis culpa nemo consectetur eaque.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cumque placeat quis sint error vitae corporis praesentium a ex, fuga ea eum repellat, molestiae animi qui, consectetur repellendus aliquid inventore.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat libero quia laudantium iste, explicabo tenetur? Itaque asperiores ratione dolorem officiis, non perspiciatis illo debitis provident at delectus dolor consectetur!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laudantium sequi ut quibusdam reprehenderit velit ab deleniti, tenetur, aut veritatis excepturi totam expedita nulla quae a dolore, eaque obcaecati assumenda!
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
