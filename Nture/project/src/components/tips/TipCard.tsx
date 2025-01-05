import React from 'react';
import { EcoTip } from '../../types/eco';
import { Droplet, Zap, Trash, Car } from 'lucide-react';

const categoryIcons = {
  water: Droplet,
  energy: Zap,
  waste: Trash,
  transport: Car
};

interface Props {
  tip: EcoTip;
}

export default function TipCard({ tip }: Props) {
  const Icon = categoryIcons[tip.category];
  
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between mb-4">
        <div className={`p-2 rounded-lg bg-${getCategoryColor(tip.category)}-100`}>
          <Icon className={`w-6 h-6 text-${getCategoryColor(tip.category)}-600`} />
        </div>
        <div className={`px-2 py-1 rounded-full text-xs font-medium bg-${getDifficultyColor(tip.difficulty)}-100 text-${getDifficultyColor(tip.difficulty)}-700`}>
          {tip.difficulty}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
      <p className="text-gray-600">{tip.description}</p>
      
      <div className="mt-4 flex items-center">
        <div className="flex -space-x-1">
          {[...Array(tip.impact)].map((_, i) => (
            <div 
              key={i}
              className="w-2 h-2 rounded-full bg-green-500"
            />
          ))}
        </div>
        <span className="ml-2 text-sm text-gray-500">Impact Level</span>
      </div>
    </div>
  );
}

function getCategoryColor(category: EcoTip['category']) {
  const colors = {
    water: 'blue',
    energy: 'yellow',
    waste: 'purple',
    transport: 'green'
  };
  return colors[category];
}

function getDifficultyColor(difficulty: EcoTip['difficulty']) {
  const colors = {
    easy: 'green',
    medium: 'yellow',
    hard: 'red'
  };
  return colors[difficulty];
}