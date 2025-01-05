import React from 'react';
import { Tree, Recycle, TreeDeciduous } from 'lucide-react';
import StatsCounter from './StatsCounter';

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-emerald-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-green-900 mb-6">
            Heal the Planet: Fight Pollution, Plant Trees, and Live Green!
          </h1>
          <p className="text-xl text-green-700 mb-12 max-w-3xl mx-auto">
            Join our mission to create a sustainable future through collective action
            and environmental consciousness.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
              <Tree className="w-5 h-5" />
              Join Campaigns
            </button>
            <button className="bg-white hover:bg-green-50 text-green-600 border-2 border-green-600 px-8 py-3 rounded-full font-semibold transition-colors flex items-center gap-2">
              <Recycle className="w-5 h-5" />
              Track Impact
            </button>
          </div>
          <StatsCounter />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24" viewBox="0 0 1440 74" fill="none">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,37.3C960,32,1056,32,1152,37.3C1248,43,1344,53,1392,58.7L1440,64L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z" fill="white"/>
        </svg>
      </div>
    </div>
  );
}