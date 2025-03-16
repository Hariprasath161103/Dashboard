import React, { useState } from 'react';
import { Settings, HelpCircle, Sun } from 'lucide-react';
import NavItem from './NavItem';
import SettingsModal from './SettingsModal';

const bottomNavItems = [
  { icon: Settings, label: "Settings", action: "openSettings" },
  { icon: HelpCircle, label: "Help" },
  { icon: Sun, label: "Toggle theme", action: "toggleTheme" }
];

const BottomNavigation = () => {
  const [theme, setTheme] = useState('light');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  console.log('Settings modal state:', isSettingsOpen);  // Debug log

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    document.documentElement.setAttribute('data-theme', theme === 'light' ? 'dark' : 'light');
  };

  const handleAction = (action) => {
    console.log('Action triggered:', action);  // Debug log

    if (action === 'toggleTheme') {
      toggleTheme();
    } else if (action === 'openSettings') {
      console.log('Opening settings modal');  // Debug log
      setIsSettingsOpen(true);
    }
  };

  return (
    <div className="absolute bottom-0 w-64 p-2 border-t border-gray-800">
      {bottomNavItems.map((item, index) => (
        <NavItem
          key={index}
          Icon={item.icon}
          label={item.label}
          onClick={() => item.action && handleAction(item.action)}
        />
      ))}
      {isSettingsOpen && <SettingsModal onClose={() => setIsSettingsOpen(false)} />}
    </div>
  );
};

export default BottomNavigation;
