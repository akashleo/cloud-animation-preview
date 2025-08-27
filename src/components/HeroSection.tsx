import React, { useState, useEffect } from 'react';
import { Download, Github } from 'lucide-react';

interface HeroSectionProps {
  theme: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ theme }) => {
  const [downloadCount, setDownloadCount] = useState<number | null>(null);

  useEffect(() => {
    const fetchDownloadCount = async () => {
      try {
        const response = await fetch('https://api.npmjs.org/downloads/point/last-year/react-cloud-animation');
        const data = await response.json();
        setDownloadCount(data.downloads);
      } catch (error) {
        console.error('Error fetching download count:', error);
      }
    };

    fetchDownloadCount();
  }, []);
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

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-6xl lg:text-7xl font-bold mb-8">
        <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
          React Cloud Animation
        </span>
      </h1>
      
      <p className={`text-xl lg:text-2xl mb-4 max-w-4xl mx-auto leading-relaxed ${getSubtextColor()}`}>
        Interactive cloud animation system with theme-aware backgrounds
        <br />
        for React applications.{' '}
        <span className="text-blue-600 font-semibold">5 smooth marquee clouds</span>{' '}
        with{' '}
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-semibold">
          automatic time-based theming.
        </span>
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 mb-16">
        <a href="https://www.npmjs.com/package/react-cloud-animation" target="_blank"
              rel="noopener noreferrer" className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg shadow-blue-200">
          <Download className="w-5 h-5" />
          npm install react-cloud-animation
        </a>
        <a
          href="https://github.com/akashleo/react-cloud-animation"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 border-2 border-gray-300 rounded-xl hover:border-gray-400 transition-all transform hover:scale-105"
        >
          <Github className="w-5 h-5" />
          View on GitHub
        </a>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">
            {downloadCount ? new Intl.NumberFormat().format(downloadCount) : '...'}
          </div>
          <div className={`text-lg ${getSubtextColor()}`}>Downloads</div>
        </div>
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">5</div>
          <div className={`text-lg ${getSubtextColor()}`}>Animated Clouds</div>
        </div>
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">3</div>
          <div className={`text-lg ${getSubtextColor()}`}>Theme Modes</div>
        </div>
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">TS</div>
          <div className={`text-lg ${getSubtextColor()}`}>TypeScript</div>
        </div>
      </div>
    </section>
  );
};
