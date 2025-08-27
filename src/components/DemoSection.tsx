import React from 'react';
import { CloudAnimation, ThemeProvider, useTheme, ThemeToggle, CloudToggleButton } from 'react-cloud-animation';

const DemoContent: React.FC = () => {
  const { theme, backgroundEffect, setTheme, toggleBackgroundEffect } = useTheme();

  const handleReset = () => {
    setTheme('light'); // Reset to default light theme
    // If clouds are currently on, toggle them off to reset to default
    if (backgroundEffect === 'clouds') {
      toggleBackgroundEffect();
    }
  };

  const getCardBg = () => {
    if (theme === 'dark') return 'bg-gray-800/90';
    if (theme === 'dusk') return 'bg-purple-900/50';
    return 'bg-white/90';
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

  return (
    <section id="demo" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div className={`${getCardBg()} backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-200/20 shadow-xl`}>
        <h2 className={`text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 ${getTextColor()}`}>Interactive Demo</h2>
        
        {/* Theme and Cloud Controls - Always Visible */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm border`}>
            <span className={`text-sm font-medium ${getTextColor()}`}>Theme:</span>
            <ThemeToggle size={4} className="p-2 text-black"/>
          </div>
          <div className={`flex items-center justify-center gap-2 px-3 sm:px-4 py-2 rounded-lg backdrop-blur-sm border`}>
            <span className={`text-sm font-medium ${getTextColor()}`}>Clouds:</span>
            <CloudToggleButton className="p-2" />
          </div>
        </div>
        
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="w-full max-w-2xl px-2 sm:px-0">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2 sm:gap-0">
              <h3 className={`text-lg sm:text-xl font-semibold ${getTextColor()}`}>Live Preview</h3>
              <span className={`px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs sm:text-sm font-medium ${
                theme === 'light' ? 'bg-blue-100 text-blue-700' : 
                theme === 'dusk' ? 'bg-purple-900/70 text-purple-200' : 
                'bg-gray-800/70 text-gray-200'
              }`}>
                {theme === 'light' ? '☀️' : theme === 'dusk' ? '🌆' : '🌙'} {theme}
              </span>
            </div>
            
            <div className={`relative h-64 sm:h-80 rounded-xl sm:rounded-2xl overflow-hidden border-2 ${
              theme === 'dark' 
                ? 'bg-gradient-to-br from-gray-800 to-gray-700 border-gray-600' 
                : theme === 'dusk'
                ? 'bg-gradient-to-br from-purple-800 to-blue-800 border-purple-600'
                : 'bg-gradient-to-br from-blue-100 to-purple-100 border-blue-200'
            }`}>
              {backgroundEffect === 'clouds' && (
                <CloudAnimation
                  animationSpeeds={[25, 30, 35, 40, 45]}
                  className="absolute inset-0 pointer-events-none opacity-40"
                />
              )}
              
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className={`text-center p-4 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl backdrop-blur-sm ${
                  theme === 'light' 
                    ? 'bg-white/90 shadow-lg' 
                    : theme === 'dusk'
                    ? 'bg-purple-900/70 border border-purple-500/30'
                    : 'bg-gray-900/80 border border-gray-700/30'
                }`}>
                  <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4">
                    {theme === 'light' 
                      ? backgroundEffect === 'clouds' ? '☁️☀️' : '🌤️' 
                      : theme === 'dusk' 
                      ? backgroundEffect === 'clouds' ? '☁️🌆' : '🌆' 
                      : backgroundEffect === 'clouds' ? '☁️🌙' : '🌙'}
                  </div>
                  <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 ${getTextColor()}`}>
                    {theme.charAt(0).toUpperCase() + theme.slice(1)} Theme
                  </h4>
                  <p className={`${getSubtextColor()} mb-3 sm:mb-4 text-sm sm:text-base`}>
                    {backgroundEffect === 'clouds'
                      ? 'Beautiful animated clouds floating in the background'
                      : 'Cloud animation is currently disabled'}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      theme === 'light' ? 'bg-blue-100 text-blue-700' : 'bg-blue-900/50 text-blue-300'
                    }`}>
                      Theme: {theme}
                    </div>
                    <div className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                      backgroundEffect === 'clouds'
                        ? (theme === 'light' ? 'bg-green-100 text-green-700' : 'bg-green-900/50 text-green-300')
                        : (theme === 'light' ? 'bg-red-100 text-red-700' : 'bg-red-900/50 text-red-300')
                    }`}>
                      Clouds: {backgroundEffect === 'clouds' ? 'ON' : 'OFF'}
                    </div>
                  </div>
                  
                  <button
                    onClick={handleReset}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                      theme === 'light'
                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                        : 'bg-gray-700 text-gray-200 hover:bg-gray-600 border border-gray-600'
                    }`}
                  >
                    🔄 Reset to Default
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center px-4">
          <p className={`${getSubtextColor()} text-sm sm:text-base lg:text-lg`}>
            This demo shows the CloudAnimation component in action. Use the controls above to see different themes!
          </p>
        </div>
      </div>
    </section>
  );
};

export const DemoSection: React.FC = () => {
  return (
    <ThemeProvider>
      <DemoContent />
    </ThemeProvider>
  );
};
