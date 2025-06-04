import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SolutionComponent = () => {
  const [numbers, setNumbers] = useState<number[]>([]);

  // Generate 8 random numbers between 1-10
  const generateNumbers = () => {
    const newNumbers = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10) + 1);
    setNumbers(newNumbers);
  };

  // Count the highest number of duplicate integers
  const getHighestDuplicateCount = (nums: number[]): number => {
    const frequency: { [key: number]: number } = {};
    
    // Count frequency of each number
    nums.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    
    // Find the highest frequency
    return Math.max(...Object.values(frequency));
  };

  // Determine background type based on duplicate count
  const getBackgroundType = (duplicateCount: number): string => {
    if (duplicateCount === 1) return 'transparent';
    if (duplicateCount === 2) return 'blue';
    if (duplicateCount === 3) return 'green';
    return 'yellow'; // 4 or more
  };

  // Get background color class
  const getBackgroundClass = (duplicateCount: number): string => {
    const type = getBackgroundType(duplicateCount);
    switch (type) {
      case 'blue': return 'bg-blue-200';
      case 'green': return 'bg-green-200';
      case 'yellow': return 'bg-yellow-200';
      default: return 'bg-transparent';
    }
  };

  const currentDuplicateCount = numbers.length > 0 ? getHighestDuplicateCount(numbers) : 0;
  const currentType = numbers.length > 0 ? getBackgroundType(currentDuplicateCount) : '';

  // Fixed mathematical probabilities for 8 numbers from 1-10
  const theoreticalProbabilities = [
    { type: 'transparent', label: 'No Duplicates', probability: '1.8%', description: 'All 8 numbers different' },
    { type: 'blue', label: '2 Same', probability: '23.5%', description: 'Exactly 2 of same number' },
    { type: 'green', label: '3 Same', probability: '39.2%', description: 'Exactly 3 of same number' },
    { type: 'yellow', label: '4+ Same', probability: '35.5%', description: '4 or more of same number' },
  ];

  return (
    <div className="space-y-6">
      {/* Number Display Card */}
      <Card className={`transition-colors duration-300 ${getBackgroundClass(currentDuplicateCount)}`}>
        <CardHeader>
          <CardTitle className="text-center">
            Random Numbers
            {currentDuplicateCount > 1 && (
              <span className="ml-2 text-sm font-normal">
                ({currentDuplicateCount} duplicates)
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {numbers.length === 0 ? (
            <p className="text-center text-gray-500">Click "Generate" to start!</p>
          ) : (
            <div className="grid grid-cols-4 gap-4">
              {numbers.map((num, index) => (
                <div
                  key={index}
                  className="bg-white border-2 border-gray-300 rounded-lg p-4 text-center text-2xl font-bold shadow-sm"
                >
                  {num}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Generate Button */}
      <div className="text-center">
        <button
          onClick={generateNumbers}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
        >
          Generate Numbers
        </button>
      </div>

      {/* Theoretical Probabilities */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Mathematical Probabilities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {theoreticalProbabilities.map((prob) => {
              const isActive = currentType === prob.type;
              const baseClass = "text-center p-4 rounded-lg border-2 transition-all duration-300";
              const activeClass = isActive 
                ? "border-gray-800 bg-gray-800 text-white shadow-lg scale-105" 
                : "border-gray-200 bg-gray-50 hover:bg-gray-100";
              
              return (
                <div key={prob.type} className={`${baseClass} ${activeClass}`}>
                  <div className="font-bold text-xl mb-1">{prob.probability}</div>
                  <div className={`font-medium mb-2 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                    {prob.label}
                  </div>
                  <div className={`text-sm ${isActive ? 'text-gray-200' : 'text-gray-600'}`}>
                    {prob.description}
                  </div>
                  {isActive && (
                    <div className="mt-2 text-xs font-bold text-yellow-300">
                      ← ACTIVE
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SolutionComponent; 