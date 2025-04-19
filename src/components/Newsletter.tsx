import React, { useState } from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() !== '') {
      // In a real application, you would send this to your backend
      console.log('Email submitted:', email);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center relative">
          <div className="relative w-full mb-4 sm:mb-0">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-900 w-5 h-5" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full py-3 pl-10 pr-3 rounded-lg sm:rounded-r-none bg-white bg-opacity-90 backdrop-blur-sm focus:bg-white text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full sm:w-auto py-3 px-6 rounded-lg sm:rounded-l-none bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Notify Me
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </form>
      ) : (
        <div className="bg-green-600 text-white py-3 px-6 rounded-lg text-center animate-pulse">
          Thanks! We'll notify you when we launch.
        </div>
      )}
      <p className="text-blue-200 text-sm mt-3 text-center">
        Be the first to know when we launch. No spam, ever.
      </p>
    </div>
  );
};

export default Newsletter;