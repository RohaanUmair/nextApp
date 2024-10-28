import React from 'react';

const data = [
  { label: 'January', value: 40 },
  { label: 'February', value: 55 },
  { label: 'March', value: 70 },
  { label: 'April', value: 60 },
  { label: 'May', value: 90 },
  { label: 'June', value: 80 },
];

const BarGraph = () => {
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="w-full max-w-md mx-auto mt-8">
      <h2 className="text-2xl font-semibold text-center mb-6">Monthly Data</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="w-20 text-sm">{item.label}</span>
            <div
              className="h-6 bg-blue-500 rounded-md"
              style={{
                width: `${(item.value / maxValue) * 100}%`,
                transition: 'width 0.3s ease-in-out',
              }}
            ></div>
            <span className="text-sm font-medium">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BarGraph;
