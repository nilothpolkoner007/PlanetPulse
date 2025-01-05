import { PlasticItem } from '../../types/calculator';

interface Props {
  results: Record<string, number>;
  items: PlasticItem[];
}

export default function CalculatorResults({ results, items }: Props) {
  const calculateTotalWeight = () => {
    return items.reduce((total, item) => {
      return total + (results[item.id] || 0) * item.weightGrams;
    }, 0);
  };

  const calculateTotalCO2 = () => {
    return items.reduce((total, item) => {
      return total + (results[item.id] || 0) * item.co2PerUnit;
    }, 0);
  };

  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Your Weekly Impact
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-blue-700 mb-2">
            {(calculateTotalWeight() / 1000).toFixed(2)} kg
          </div>
          <div className="text-blue-600">Total Plastic Weight</div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-6">
          <div className="text-3xl font-bold text-green-700 mb-2">
            {(calculateTotalCO2() / 1000).toFixed(2)} kg
          </div>
          <div className="text-green-600">CO₂ Emissions</div>
        </div>
      </div>
    </div>
  );
}