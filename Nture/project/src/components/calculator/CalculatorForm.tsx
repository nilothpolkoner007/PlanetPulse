import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { PlasticItem } from '../../types/calculator';

interface Props {
  items: PlasticItem[];
  onCalculate: (results: Record<string, number>) => void;
}

export default function CalculatorForm({ items, onCalculate }: Props) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(quantities);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.id} className="space-y-2">
            <label 
              htmlFor={item.id}
              className="block text-sm font-medium text-gray-700"
            >
              {item.name} (per week)
            </label>
            <input
              type="number"
              id={item.id}
              min="0"
              value={quantities[item.id] || ''}
              onChange={(e) => setQuantities(prev => ({
                ...prev,
                [item.id]: parseInt(e.target.value) || 0
              }))}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <button
          type="submit"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Calculator className="w-5 h-5 mr-2" />
          Calculate Impact
        </button>
      </div>
    </form>
  );
}