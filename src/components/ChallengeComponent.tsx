import React from 'react';

const ChallengeComponent = () => {
  // HELPER: Color hex codes for different sum ranges
  const colors = {
    red: '#fecaca',    // Sum 0-18
    blue: '#bfdbfe',   // Sum 19-36  
    green: '#bbf7d0',  // Sum 37-54
    yellow: '#fef3c7'  // Sum 55-72
  };

  // HELPER: Sum ranges
  const ranges = {
    red: { min: 0, max: 18 },
    blue: { min: 19, max: 36 },
    green: { min: 37, max: 54 },
    yellow: { min: 55, max: 72 }
  };

  // BUILD YOUR SOLUTION HERE
  // - Add your state for numbers and tracking results
  // - Add your function for generating 8 random numbers (0-9)
  // - Add your function for calculating sum and determining background color
  // - Add your JSX for displaying numbers, sum, and generate button
  // - Use the colors and ranges provided above
  // - You can use Tailwind classes OR the CSS classes defined below

  function renderCSS() {
    return `
      /* Vanilla CSS if you don't know Tailwind */
      .bg-red { background-color: ${colors.red}; }
      .bg-blue { background-color: ${colors.blue}; }
      .bg-green { background-color: ${colors.green}; }
      .bg-yellow { background-color: ${colors.yellow}; }
    `
  }

  return (
    <>
      <style>{renderCSS()}</style>
      
      <div className="text-center text-gray-400">
        <p>Start coding here...</p>
        <p className="text-xs mt-2 dope">You can use Tailwind classes or the CSS classes defined above</p>
      </div>
    </>
  );
};

export default ChallengeComponent; 