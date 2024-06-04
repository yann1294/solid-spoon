import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className="text-white text-center  text-base border-1
      border-blue-500
      py-2 px-20 bg-green-500 hover:bg-transparent
      hover:border-green-500
      hover:text-black
      transition duration-300"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
