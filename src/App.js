import React from 'react';
import Sidebar from './components/Sidebar';
import LearningPath from './components/LearningPath';

function App() {
  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white">
      <Sidebar />
      <div className="flex-1 p-8">
        <LearningPath />
      </div>
    </div>
  );
}

export default App;
