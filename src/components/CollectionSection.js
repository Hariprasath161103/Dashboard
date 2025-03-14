import React from 'react';
import NavItem from './NavItem';

const CollectionSection = ({ title, items }) => (
  <div className="p-2">
    <div className="text-xs text-gray-400 px-2 py-1">{title}</div>
    {items.map((item, index) => (
      <NavItem key={index} Icon={item.icon} label={item.label} />
    ))}
  </div>
);

export default CollectionSection;
