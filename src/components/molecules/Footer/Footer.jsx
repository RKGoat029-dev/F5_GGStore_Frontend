import React from "react";
import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between shadow-md">
      <Typography className="text-blue-gray-900 font-normal">
        © 2025 GG Store. All Rights Reserved.
      </Typography>
      
      <div className="flex justify-center items-center gap-4">
        <Link to="/about-us" className="text-blue-gray-900 hover:text-blue-600 transition-colors">
          About Us
        </Link>
        
        <a 
          href="https://github.com/RKGoat029-dev" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-gray-800 hover:text-gray-600 transition-colors"
        >
          <FaGithub size={24} color="#24292e" />
        </a><p>Antonio</p>
        
        <a 
          href="https://www.linkedin.com/in/antonio-j-cabrera/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-800 hover:text-blue-600 transition-colors"
        >
          <FaLinkedin size={24} color="#0077B5" />
        </a>
        
        <a 
          href="https://github.com/nawud" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-purple-800 hover:text-purple-600 transition-colors"
        >
          <FaGithub size={24} color="#6f42c1" />
        </a><p>Miller</p>
        
        <a 
          href="https://www.linkedin.com/in/miller-duwan/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-green-800 hover:text-green-600 transition-colors"
        >
          <FaLinkedin size={24} color="#0A66C2" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;