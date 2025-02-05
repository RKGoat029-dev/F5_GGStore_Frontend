import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full sticky bottom-0 bg-white flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-4 text-center md:justify-between shadow-md">
      <Typography className="text-blue-gray-900 font-normal">
        © 2025 GG Store. All Rights Reserved.
      </Typography>
      
      <div className="flex justify-center items-center gap-6">
        <Link to="/about-us" className="text-blue-gray-900 hover:text-blue-600 transition-colors">
          About Us
        </Link>
        
        <div className="flex items-center gap-2">
          <a 
            href="https://github.com/RKGoat029-dev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-800 hover:text-gray-600 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <p className="text-sm font-medium">Antonio</p>
        </div>

        <div className="flex items-center gap-2">
          <a 
            href="https://www.linkedin.com/in/antonio-j-cabrera/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-800 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

        <div className="flex items-center gap-2">
          <a 
            href="https://github.com/nawud" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-800 hover:text-purple-600 transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <p className="text-sm font-medium">Miller</p>
        </div>

        <div className="flex items-center gap-2">
          <a 
            href="https://www.linkedin.com/in/miller-duwan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-green-800 hover:text-green-600 transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
