import React from "react";
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import {bgGreen} from "next/dist/lib/picocolors";


const PalmierLandingPageFooter: React.FC = () => {

    return(
        <div className="flex justify-between text-white bg-topBarColor  py-2 px-4 ">
      {/* Left side: Email and Phone */}
      <div className="flex items-center">
        <div className="mr-2 ">
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-200">
            <HiOutlineMail color={bgGreen('#05542C')} size={20}/>
          </div>

        </div>
        <span className="text-lg mr-4 ">palmier@gmail.com</span>
        <div>
          <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-200 mr-1">
          <HiOutlinePhone size={20}/>
          </div>
        </div>
        <span className="text-lg">+4188888899</span>
      </div>

      {/* Right side: Social Media Icons */}
      <div className="flex items-center ml-30">
        <a href="https://facebook.com" className="mr-4">
        <FaFacebook size={20} />
        </a>
       <a href="https://instagram.com" className="mr-4">
          <FaInstagram size={20} />
        </a>
        <a href="https://youtube.com" >
          <FaYoutube size={20} />
        </a>
      </div>
    </div>
    )


}

export default PalmierLandingPageFooter;