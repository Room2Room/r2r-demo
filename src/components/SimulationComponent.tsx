import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ResultType = 'transparent' | 'blue' | 'green' | 'yellow';

const SimulationComponent = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [results, setResults] = useState({
    transparent: 0,
    blue: 0,
    green: 0,
    yellow: 0,
    total: 0
  });
  const [currentNumbers, setCurrentNumbers] = useState<number[]>([]);
  const [currentType, setCurrentType] = useState<string>('');
  
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Generate 8 random numbers between 1-10
  const generateNumbers = (): number[] => {
    return Array.from({ length: 8 }, () => Math.floor(Math.random() * 10) + 1);
  };

  // Count the highest number of duplicate integers
  const getHighestDuplicateCount = (nums: number[]): number => {
    const frequency: { [key: number]: number } = {};
    
    nums.forEach(num => {
      frequency[num] = (frequency[num] || 0) + 1;
    });
    
    return Math.max(...Object.values(frequency));
  };

  // Determine background type based on duplicate count
  const getBackgroundType = (duplicateCount: number): ResultType => {
    if (duplicateCount === 1) return 'transparent';
    if (duplicateCount === 2) return 'blue';
    if (duplicateCount === 3) return 'green';
    return 'yellow'; // 4 or more
  };

  // Run simulation
  const runSimulation = () => {
    const numbers = generateNumbers();
    const duplicateCount = getHighestDuplicateCount(numbers);
    const type = getBackgroundType(duplicateCount);
    
    setCurrentNumbers(numbers);
    setCurrentType(type);
    
    setResults(prev => ({
      ...prev,
      [type]: prev[type] + 1,
      total: prev.total + 1
    }));
  };

  // Start/stop simulation
  const toggleSimulation = () => {
    if (isRunning) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setIsRunning(false);
    } else {
      intervalRef.current = setInterval(runSimulation, 10); // Every 10ms
      setIsRunning(true);
    }
  };

  // Reset results
  const resetResults = () => {
    setResults({
      transparent: 0,
      blue: 0,
      green: 0,
      yellow: 0,
      total: 0
    });
    setCurrentNumbers([]);
    setCurrentType('');
  };

  // Cleanup interval on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Calculate actual percentages
  const getActualPercentage = (count: number): number => {
    return results.total > 0 ? Math.round((count / results.total) * 100 * 100) / 100 : 0;
  };

  // Theoretical probabilities (more accurate after calculation)
  const theoretical = {
    transparent: 1.81, // All different
    blue: 38.69,       // Exactly 2 same  
    green: 39.99,      // Exactly 3 same
    yellow: 19.51      // 4+ same
  };

  // Get background color class
  const getBackgroundClass = (type: string): string => {
    switch (type) {
      case 'blue': return 'bg-blue-200';
      case 'green': return 'bg-green-200';
      case 'yellow': return 'bg-yellow-200';
      default: return 'bg-transparent';
    }
  };

  const resultsData = [
    { 
      type: 'transparent' as const, 
      label: 'No Duplicates', 
      theoretical: theoretical.transparent,
      actual: getActualPercentage(results.transparent),
      count: results.transparent
    },
    { 
      type: 'blue' as const, 
      label: '2 Same', 
      theoretical: theoretical.blue,
      actual: getActualPercentage(results.blue),
      count: results.blue
    },
    { 
      type: 'green' as const, 
      label: '3 Same', 
      theoretical: theoretical.green,
      actual: getActualPercentage(results.green),
      count: results.green
    },
    { 
      type: 'yellow' as const, 
      label: '4+ Same', 
      theoretical: theoretical.yellow,
      actual: getActualPercentage(results.yellow),
      count: results.yellow
    }
  ];

  return (
    <div className="space-y-6">
      {/* Current Numbers Display */}
      {currentNumbers.length > 0 && (
        <Card className={`transition-colors duration-100 ${getBackgroundClass(currentType)}`}>
          <CardHeader>
            <CardTitle className="text-center text-sm">
              Current Generation (Running at 100 Hz)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-4 gap-2">
              {currentNumbers.map((num, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-300 rounded p-2 text-center text-lg font-bold"
                >
                  {num}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Controls */}
      <div className="text-center space-x-4">
        <button
          onClick={toggleSimulation}
          className={`font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg ${
            isRunning 
              ? 'bg-red-600 hover:bg-red-700 text-white' 
              : 'bg-green-600 hover:bg-green-700 text-white'
          }`}
        >
          {isRunning ? 'Stop Simulation' : 'Start Simulation'}
        </button>
        <button
          onClick={resetResults}
          className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200 shadow-lg"
        >
          Reset
        </button>
      </div>

      {/* Results Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-center">
            Simulation Results ({results.total.toLocaleString()} attempts)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {resultsData.map((data) => {
              const isActive = currentType === data.type;
              const difference = Math.abs(data.actual - data.theoretical);
              const isClose = difference < 2; // Within 2% is considered close
              
              return (
                <div 
                  key={data.type} 
                  className={`p-4 rounded-lg border-2 transition-all duration-100 ${
                    isActive 
                      ? 'border-gray-800 bg-gray-800 text-white shadow-lg' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="text-center">
                    <div className={`font-bold text-lg mb-2 ${isActive ? 'text-white' : 'text-gray-800'}`}>
                      {data.label}
                    </div>
                    
                    <div className="space-y-2">
                      <div>
                        <div className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                          Theoretical: {data.theoretical}%
                        </div>
                        <div className={`text-sm ${isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                          Actual: {data.actual}%
                        </div>
                      </div>
                      
                      <div className={`text-xs ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                        Count: {data.count.toLocaleString()}
                      </div>
                      
                      {results.total > 1000 && (
                        <div className={`text-xs font-medium ${
                          isClose 
                            ? (isActive ? 'text-green-300' : 'text-green-600')
                            : (isActive ? 'text-red-300' : 'text-red-600')
                        }`}>
                          Δ {difference.toFixed(2)}%
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Convergence Info */}
      {results.total > 10000 && (
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4 text-center">
            <p className="text-blue-800 text-sm">
              <strong>Law of Large Numbers:</strong> As sample size increases, actual percentages should converge to theoretical values.
              {results.total > 100000 && ' You should see very close convergence now!'}
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SimulationComponent; 