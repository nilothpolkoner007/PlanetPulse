import React, { useState, useEffect } from 'react';
import { Tree, Wind, Recycle } from 'lucide-react';

export default function StatsCounter() {
  const [stats, setStats] = useState({
    treesPlanted: 0,
    pollutionReduced: 0,
    plasticAvoided: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStats(prev => ({
        treesPlanted: Math.min(prev.treesPlanted + 1, 50000),
        pollutionReduced: Math.min(prev.pollutionReduced + 2, 25000),
        plasticAvoided: Math.min(prev.plasticAvoided + 3, 75000)
      }));
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <Tree className="w-12 h-12 text-green-600" />
        </div>
        <div className="text-4xl font-bold text-green-600 mb-2">
          {stats.treesPlanted.toLocaleString()}
        </div>
        <div className="text-gray-600">Trees Planted</div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <Wind className="w-12 h-12 text-blue-600" />
        </div>
        <div className="text-4xl font-bold text-blue-600 mb-2">
          {stats.pollutionReduced.toLocaleString()}kg
        </div>
        <div className="text-gray-600">CO₂ Reduced</div>
      </div>
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-center mb-4">
          <Recycle className="w-12 h-12 text-purple-600" />
        </div>
        <div className="text-4xl font-bold text-purple-600 mb-2">
          {stats.plasticAvoided.toLocaleString()}kg
        </div>
        <div className="text-gray-600">Plastic Avoided</div>
      </div>
    </div>
  );
}