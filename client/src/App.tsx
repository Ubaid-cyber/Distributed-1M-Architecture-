import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      {/* Main Card */}
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-md w-full text-center">
        
        {/* Header Section */}
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">
          MERN Setup Ready
        </h1>
        
        <p className="text-gray-600 mb-6">
          Your frontend is running with React + Tailwind CSS.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold">
            Connect Backend
          </button>
          <button className="bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300 font-medium">
            Read Documentation
          </button>
        </div>

        {/* Status Indicator */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="flex items-center justify-center gap-2 text-sm text-green-600 font-medium">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            System Online
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;