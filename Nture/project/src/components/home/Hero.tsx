import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-green-900 to-green-700">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
          alt="Nature landscape"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Go Green,
            <span className="block">Save the Planet!</span>
          </h1>
          <p className="text-xl text-green-100 mb-8">
            Join our community of eco-warriors making a difference. 
            Every small action counts towards a sustainable future.
          </p>
          <button className="inline-flex items-center px-8 py-4 rounded-full bg-white text-green-900 font-semibold hover:bg-green-50 transition-colors shadow-lg">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}