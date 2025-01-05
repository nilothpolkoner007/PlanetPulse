import React, { useState } from 'react';
import { Search } from 'lucide-react';
import TipCard from './TipCard';
import { EcoTip } from '../../types/eco';

const SAMPLE_TIPS: EcoTip[] = [
  {
    id: '1',
    title: 'Switch to LED Bulbs',
    description: 'Replace traditional bulbs with LED alternatives to save energy and reduce costs.',
    category: 'energy',
    difficulty: 'easy',
    impact: 4
  },
  {
    id: '2',
    title: 'Install a Water Filter',
    description: 'Reduce plastic waste from water bottles by using a home water filtration system.',
    category: 'water',
    difficulty: 'medium',
    impact: 5
  }
];

export default function TipsList() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredTips = SAMPLE_TIPS.filter(tip =>
    tip.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tip.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for eco tips..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTips.map(tip => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      </div>
    </section>
  );
}