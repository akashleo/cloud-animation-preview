import React from 'react';
import { CloudAnimation } from 'react-cloud-animation';

interface DemoSectionProps {
  theme: string;
  backgroundEffect: string;
  toggleBackgroundEffect: () => void;
}

export const DemoSection: React.FC<DemoSectionProps> = ({ 
  theme, 
  backgroundEffect, 
  toggleBackgroundEffect 
}) => {
  const getCardBg = () => {
    if (theme === 'dark') return 'bg-gray-800/60';
    if (theme === 'dusk') return 'bg-gray-800/60';
    return 'bg-white/60';
  };

  const getTextColor = () => {
    if (theme === 'dark') return 'text-white';
    if (theme === 'dusk') return 'text-white';
    return 'text-gray-900';
  };

  const getSubtextColor = () => {
    if (theme === 'dark') return 'text-gray-300';
    if (theme === 'dusk') return 'text-gray-200';
    return 'text-gray-600';
  };

  const showClouds = backgroundEffect === 'clouds';

  return (
    <section id="demo" className="max-w-7xl mx-auto px-6 py-20">
      <div className={`${getCardBg()} backdrop-blur-sm rounded-3xl p-12 border border-gray-200/20`}>
        <h2 className={`text-3xl font-bold text-center mb-12 ${getTextColor()}`}>Interactive Demo</h2>
        
        <div className="relative h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden">
          {showClouds && (
            <CloudAnimation 
              animationSpeeds={[30, 35, 40, 45, 50]}
              className="absolute inset-0"
            />
          )}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h3 className={`text-2xl font-bold mb-4 ${getTextColor()}`}>
                {showClouds ? 'Live Cloud Animation' : 'Cloud Animation Disabled'}
              </h3>
              <p className={getSubtextColor()}>
                {showClouds 
                  ? 'Watch the smooth, animated clouds drift across the screen'
                  : 'Click the cloud toggle button to enable animation'}
              </p>
              <button
                onClick={toggleBackgroundEffect}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {showClouds ? 'Disable Clouds' : 'Enable Clouds'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
