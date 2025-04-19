import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-8 bg-blue-950 bg-opacity-70 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex space-x-6 mb-6">
            <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors duration-300">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors duration-300">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors duration-300">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-300 hover:text-blue-400 transition-colors duration-300">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} 3Dfyy. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;