import React from 'react';
import { useTheme } from 'react-cloud-animation';

export const Footer: React.FC = () => {
  const { theme } = useTheme();

  const getTextColor = () => {
    if (theme === 'dark') return 'text-white';
    if (theme === 'dusk') return 'text-white';
    return 'text-gray-900';
  };

  const getSecondaryTextColor = () => {
    if (theme === 'dark') return 'text-gray-300';
    if (theme === 'dusk') return 'text-gray-200';
    return 'text-gray-600';
  };

  const getBorderColor = () => {
    if (theme === 'dark') return 'border-gray-700/50';
    if (theme === 'dusk') return 'border-gray-600/50';
    return 'border-gray-200/50';
  };

  return (
    <footer className={`relative z-10 border-t ${getBorderColor()} backdrop-blur-sm`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="text-center">
          <p className={`text-xs sm:text-sm ${getSecondaryTextColor()}`}>
            Made with <span className="text-red-500">♥</span> by{' '}
            <span className={`font-semibold ${getTextColor()}`}>Akash Ghosh</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
