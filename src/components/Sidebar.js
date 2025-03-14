import React from 'react';
import UserProfile from './UserProfile';
import Navigation from './Navigation';
import Collections from './Collections';
import BottomNavigation from './BottomNavigation';

const Sidebar = () => {
  return (
    <div className="w-64 border-r border-gray-800">
      <UserProfile />
      <Navigation />
      <Collections />
      <BottomNavigation />
    </div>
  );
};

export default Sidebar;
