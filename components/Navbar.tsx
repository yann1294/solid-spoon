"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center mt-8">
        {/* Hamburger Icon with Logo (for small screens) */}
        <div className="md:hidden">
          <button onClick={toggleNavbar} className="mr-4">
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
          <button className="flex items-center">
            <Image
              src="/logo.png"
              width={250}
              height={250}
              alt="Logo"
              className="h-8 w-auto mr-2"
            />
          </button>
        </div>

        {/* Logo (for medium and larger screens) */}
        <div className="flex items-center mr-20">
          <img src="logo.png" alt="Logo" className="h-8 w-auto mr-4" />
        </div>

        {/* Navbar Links (for medium and larger screens) */}
        <div className="hidden md:flex items-center bg-navBarColor rounded-full font-semibold">
          <Link
            href="/"
            className="nav-link btn text-2xl px-4 py-2 ml-4 hover:text-[#62B565] hover:bg-transparent hover:border-transparent cursor-pointer "
          >
            Accueil
          </Link>
          <Link
            href="/apropos"
            className="nav-link btn text-2xl px-8 py-4 hover:text-[#62B565] hover:bg-transparent hover:border-transparent cursor-pointer"
          >
            A propos
          </Link>
          <Link
            href="/projet"
            className="nav-link btn text-2xl px-4 py-2 hover:text-[#62B565] hover:bg-transparent hover:border-transparent cursor-pointer"
          >
            Project
          </Link>
          <Link
            href="/contact"
            className="nav-link btn text-2xl px-4 py-2 hover:text-[#62B565] hover:bg-transparent hover:border-transparent cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Donate Button */}
        <button
          className="hidden md:block

        bg-rejoignezNous text-white text-base font-bold px-2 py-2
        hover:bg-transparent hover:border-green-500 border-2
        border-green-500
        transition duration-300
        hover:text-black

        rounded-full"
        >
          REJOIGNEZ-NOUS
        </button>
      </div>

      {/* Navbar Links (for small screens, toggled by hamburger icon) */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 px-4 py-2">
            <Link href="/" className="nav-link btn  ">
              Accueil
            </Link>
            <Link href="/apropos" className="nav-link btn  ">
              A propos
            </Link>
            <Link href="/projet" className="nav-link btn  ">
              Project
            </Link>
            <Link href="/contact" className="nav-link btn  mr-4">
              Contact
            </Link>
          </div>
          <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-transparent hover:border-green-500 border-2 border-green-500 transition duration-300 self-center mt-4">
            Faire un Don
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

//  <nav className="bg-white">
//       <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center mt-8">
//         {/* Hamburger Icon with Logo (for small screens) */}
//         <div className="md:hidden">
//           <button onClick={toggleNavbar} className="mr-4">
//             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//             </svg>
//           </button>
//           <button className="flex items-center">
//             <Image src="/logo.png" width={250} height={250} alt="Logo" className="h-8 w-auto mr-2" />
//           </button>
//         </div>

//         {/* Logo (for medium and larger screens) */}
//         <div className="flex items-center mr-20">
//           <img src="logo.png" alt="Logo" className="h-8 w-auto mr-4" />
//         </div>

//         {/* Navbar Links (for medium and larger screens) */}

//         <div className="md:flex items-center space-x-4 h-16 w-2/5 bg-navBarColor rounded-full
//              font-semibold"
//         >
//           <Link href="/" className="nav-link btn text-2xl px-4 py-2 ml-4 hover:cursor-pointer">Accueil</Link>
//           <Link href="/apropos" className="nav-link btn  text-2xl px-6 py-4 hover:cursor-pointer">A propos</Link>
//           <Link href="/projet" className="nav-link btn  text-2xl px-4 py-2 hover:cursor-pointer">Project</Link>
//           <Link href="/contact" className="nav-link btn  text-2xl px-4 py-2 hover:cursor-pointer">Contact</Link>
//         </div>
//         {/* Donate Button */}
//         <button className="hidden md:block

//         bg-rejoignezNous text-white text-base font-bold px-2 py-2
//         hover:bg-transparent hover:border-green-500 border-2
//         border-green-500
//         transition duration-300
//         hover:text-black

//         rounded-full"
//         >
//           REJOIGNEZ-NOUS
//         </button>
//       </div>

//       {/* Navbar Links (for small screens, toggled by hamburger icon) */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="flex flex-col space-y-4 px-4 py-2">
//             <Link href="#" className="nav-link btn  ">Accueil</Link>
//             <Link href="#" className="nav-link btn  ">A propos</Link>
//             <Link href="#" className="nav-link btn  ">Project</Link>
//             <Link href="#" className="nav-link btn  mr-4">Contact</Link>
//           </div>
//           <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-transparent hover:border-green-500 border-2 border-green-500 transition duration-300 self-center mt-4">
//             Faire un Don
//           </button>
//         </div>
//       )}
//     </nav>
