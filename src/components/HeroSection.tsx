import React from 'react';
import { Cuboid as Cube3d, Printer, Clock, Mail, ArrowRight } from 'lucide-react';
import Newsletter from './Newsletter';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-950 to-blue-900 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Geometric background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ 
             backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 255, 255, .05) 25%, rgba(255, 255, 255, .05) 26%, transparent 27%, transparent 74%, rgba(255, 255, 255, .05) 75%, rgba(255, 255, 255, .05) 76%, transparent 77%, transparent)',
             backgroundSize: '50px 50px' 
           }}>
      </div>

      {/* Floating 3D objects */}
      <div className="absolute left-5 top-32 animate-float-slow">
        <Cube3d className="text-blue-400 w-16 h-16 opacity-40" />
      </div>
      <div className="absolute right-12 top-52 animate-float">
        <Printer className="text-blue-300 w-10 h-10 opacity-30" />
      </div>
      <div className="absolute left-1/4 bottom-32 animate-float-reverse">
        <Cube3d className="text-indigo-300 w-12 h-12 opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <div className="flex items-center justify-center mb-6">
          <Printer className="text-blue-400 w-12 h-12 mr-3" />
          <h2 className="text-2xl font-bold text-white tracking-tight">3D<span className="text-blue-400">fyy</span></h2>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          <span className="block">Revolutionary</span>
          <span className="block text-blue-400">3D Printing Service</span>
          <span className="block">Coming Soon</span>
        </h1>

        <p className="mt-6 text-xl text-blue-100 max-w-2xl">
          We're bringing next-generation 3D printing technology to your doorstep. 
          Premium quality, fast turnaround, and exceptional customer service.
        </p>

        <div className="mt-10 mb-16">
          <Newsletter />
        </div>

        <div className="flex items-center justify-center space-x-6 sm:space-x-12 mt-12">
          <div className="flex flex-col items-center">
            <Clock className="text-blue-400 w-8 h-8 mb-2" />
            <span className="text-white font-bold text-2xl">24</span>
            <span className="text-blue-200 text-sm">Days</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="text-blue-400 w-8 h-8 mb-2" />
            <span className="text-white font-bold text-2xl">12</span>
            <span className="text-blue-200 text-sm">Hours</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="text-blue-400 w-8 h-8 mb-2" />
            <span className="text-white font-bold text-2xl">36</span>
            <span className="text-blue-200 text-sm">Minutes</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="text-blue-400 w-8 h-8 mb-2" />
            <span className="text-white font-bold text-2xl">48</span>
            <span className="text-blue-200 text-sm">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;