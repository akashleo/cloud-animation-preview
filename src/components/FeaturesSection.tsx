import React from 'react';
import { Cloud, Sun, Download } from 'lucide-react';

interface FeaturesSectionProps {
  theme: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ theme }) => {
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

  const features = [
    {
      icon: <Cloud className="w-6 h-6 text-blue-600" />,
      bgColor: 'bg-blue-100 dark:bg-blue-900',
      title: '🌤️ Animated Clouds',
      description: '5 clouds with continuous marquee movement and GPU-accelerated animations using CSS transforms.'
    },
    {
      icon: <Sun className="w-6 h-6 text-purple-600" />,
      bgColor: 'bg-purple-100 dark:bg-purple-900',
      title: '🎨 Theme System',
      description: 'Dark, Light, and Dusk themes with automatic time-based switching and manual override.'
    },
    {
      icon: <Download className="w-6 h-6 text-green-600" />,
      bgColor: 'bg-green-100 dark:bg-green-900',
      title: '⚡ Performance Optimized',
      description: 'TypeScript support with full accessibility, keyboard navigation and screen reader support.'
    }
  ];

  return (
    <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 lg:mb-16 ${getTextColor()}`}>Features</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <div key={index} className={`${getCardBg()} backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200/20`}>
            <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6`}>
              {feature.icon}
            </div>
            <h3 className={`text-lg sm:text-xl font-semibold mb-3 sm:mb-4 ${getTextColor()}`}>{feature.title}</h3>
            <p className={`${getSubtextColor()} text-sm sm:text-base`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
