import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1A2B50] text-white py-4 flex flex-col sm:flex-row items-center justify-between text-center w-full px-6 relative">
      <p className="text-sm w-full text-center sm:w-auto sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">© 2025 All Rights Reserved.</p>
      
      <a
        href="https://github.com/bilolkobilov"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-300 hover:underline text-sm mt-2 sm:mt-0 sm:absolute sm:right-6"
      >
        Developed by Bilol Kobilov
      </a>
    </footer>
  );
};

export default Footer;