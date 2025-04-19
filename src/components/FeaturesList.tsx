import React from 'react';
import { Zap, Clock, Award, Shield } from 'lucide-react';

const FeaturesList: React.FC = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8 text-blue-400" />,
      title: 'High-Speed Printing',
      description: 'Cutting-edge technology for quick turnaround without compromising quality.'
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-400" />,
      title: 'On-Demand Service',
      description: 'Get your models printed when you need them, with expedited options available.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      title: 'Premium Materials',
      description: 'Wide selection of high-quality filaments and resins for perfect results.'
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: 'Quality Guarantee',
      description: 'Every print undergoes rigorous quality checks before delivery.'
    }
  ];

  return (
    <div className="w-full py-12 bg-blue-950 bg-opacity-60 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-12">What to Expect</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-blue-900 bg-opacity-40 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 hover:translate-y-[-5px] hover:shadow-xl"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-800 bg-opacity-50 mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white text-center mb-3">{feature.title}</h3>
              <p className="text-blue-200 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesList;