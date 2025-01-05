import React, { useState } from 'react';
import { Scale } from 'lucide-react';
import { PlasticItem } from '../../types/calculator';
import CalculatorForm from './CalculatorForm';
import CalculatorResults from './CalculatorResults';

const PLASTIC_ITEMS: PlasticItem[] = [
  {
    id: 'bottle',
    name: 'Plastic Bottle',
    category: 'disposable',
    weightGrams: 12.7,
    co2PerUnit: 82.8
  },
  {
    id: 'bag',
    name: 'Shopping Bag',
    category: 'disposable',
    weightGrams: 5.5,
    co2PerUnit: 33.9
  },
  {
    id: 'straw',
    name: 'Plastic Straw',
    category: 'disposable',
    weightGrams: 0.42,
    co2PerUnit: 1.46
  }
];

export default function PlasticCalculator() {
  const [results, setResults] = useState<Record<string, number>>({});

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Scale className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Calculate Your Plastic Footprint
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Track your weekly plastic usage and see your environmental impact.
            Small changes in habits can lead to significant reductions in plastic waste.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <CalculatorForm items={PLASTIC_ITEMS} onCalculate={setResults} />
          {Object.keys(results).length > 0 && (
            <CalculatorResults results={results} items={PLASTIC_ITEMS} />
          )}
        </div>
      </div>
    </section>
  );
}