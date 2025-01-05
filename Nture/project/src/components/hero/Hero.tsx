import React from 'react';
import { Waves } from 'lucide-react';
import HeroImage from './HeroImage';
import HeroStats from './HeroStats';

export default function Hero() {
  return (
    <div className="relative min-h-[80vh] bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <HeroImage />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Break Free from Plastic
            <span className="block text-3xl md:text-4xl text-blue-200 mt-2">
              Start Small, Impact Big!
            </span>
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Join millions worldwide in reducing plastic waste. Every small action counts 
            towards a cleaner, healthier planet.
          </p>
          <button className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-full font-semibold text-lg transition-colors flex items-center gap-2 shadow-lg">
            <Waves className="w-6 h-6" />
            Join the Movement
          </button>
        </div>
        <HeroStats />
      </div>
    </div>
  );
}