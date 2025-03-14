import React from 'react';

const NavItem = ({ Icon, label, onClick }) => {
  return (
    <div
      className="flex items-center p-2 cursor-pointer hover:bg-gray-700 rounded"
      onClick={onClick}
    >
      <Icon className="h-5 w-5 mr-2" />
      <span>{label}</span>
    </div>
  );
};

export default NavItem;