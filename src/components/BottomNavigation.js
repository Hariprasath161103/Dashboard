import React, { useState } from 'react';
import { Settings, HelpCircle, Sun } from 'lucide-react';
import NavItem from './NavItem';

const bottomNavItems = [
  { icon: Settings, label: "Settings", action: "openSettings" },
  { icon: HelpCircle, label: "Help" },
  { icon: Sun, label: "Toggle theme", action: "toggleTheme" }
];

const BottomNavigation = ({ onOpenSettings }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleAction = (action) => {
    if (action === 'toggleTheme') {
      toggleTheme();
    } else if (action === 'openSettings') {
      onOpenSettings(); // Trigger modal from parent
    }
  };

  return (
    <div className="fixed bottom-0 w-full bg-gray-900 text-white p-2 border-t border-gray-800 flex justify-center gap-6">
      {bottomNavItems.map((item, index) => (
        <NavItem
          key={index}
          Icon={item.icon}
          label={item.label}
          onClick={() => item.action && handleAction(item.action)}
        />
      ))}
    </div>
  );
};

export default BottomNavigation;
