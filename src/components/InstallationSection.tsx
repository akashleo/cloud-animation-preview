import React from 'react';

interface InstallationSectionProps {
  theme: string;
}

export const InstallationSection: React.FC<InstallationSectionProps> = ({ theme }) => {
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

  return (
    <section id="api" className="max-w-7xl mx-auto px-6 py-20">
      <div className={`${getCardBg()} backdrop-blur-sm rounded-3xl p-12 border border-gray-200/20`}>
        <h2 className={`text-3xl font-bold text-center mb-12 ${getTextColor()}`}>Quick Start</h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className={`text-xl font-semibold mb-6 ${getTextColor()}`}>Installation</h3>
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <code className="text-green-400 text-lg">npm install react-cloud-animation</code>
            </div>
            <div className="mt-4 bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <code className="text-green-400 text-lg">yarn add react-cloud-animation</code>
            </div>
          </div>

          <div>
            <h3 className={`text-xl font-semibold mb-6 ${getTextColor()}`}>Usage</h3>
            <div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
              <pre className="text-sm">
                <code className="text-gray-300">
                  <span className="text-blue-400">import</span> <span className="text-yellow-300">{'{'}</span>
                  {'\n  '}
                  <span className="text-yellow-300">ThemeProvider,</span>
                  {'\n  '}
                  <span className="text-yellow-300">CloudAnimation,</span>
                  {'\n  '}
                  <span className="text-yellow-300">ThemeToggle,</span>
                  {'\n  '}
                  <span className="text-yellow-300">CloudToggleButton</span>
                  {'\n'}
                  <span className="text-yellow-300">{'}'}</span> <span className="text-blue-400">from</span> <span className="text-green-400">'react-cloud-animation'</span><span className="text-gray-300">;</span>
                  {'\n'}
                  <span className="text-blue-400">import</span> <span className="text-green-400">'react-cloud-animation/dist/style.css'</span><span className="text-gray-300">;</span>
                  {'\n\n'}
                  <span className="text-blue-400">function</span> <span className="text-yellow-300">App</span><span className="text-gray-300">() {'{'}</span>
                  {'\n  '}
                  <span className="text-blue-400">return</span> <span className="text-gray-300">(</span>
                  {'\n    '}
                  <span className="text-red-400">{'<ThemeProvider>'}</span>
                  {'\n      '}
                  <span className="text-red-400">{'<div'}</span> <span className="text-green-300">className</span><span className="text-gray-300">=</span><span className="text-green-400">"app"</span><span className="text-red-400">{'>'}</span>
                  {'\n        '}
                  <span className="text-red-400">{'<CloudAnimation />'}</span>
                  {'\n        '}
                  <span className="text-red-400">{'<ThemeToggle />'}</span>
                  {'\n        '}
                  <span className="text-red-400">{'<CloudToggleButton />'}</span>
                  {'\n        '}
                  <span className="text-gray-500">{'/* Your content */'}</span>
                  {'\n      '}
                  <span className="text-red-400">{'</div>'}</span>
                  {'\n    '}
                  <span className="text-red-400">{'</ThemeProvider>'}</span>
                  {'\n  '}
                  <span className="text-gray-300">);</span>
                  {'\n'}
                  <span className="text-gray-300">{'}'}</span>
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className={`text-xl font-semibold mb-6 ${getTextColor()}`}>Theme System</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="text-yellow-400 font-semibold mb-2">🌅 Light Theme</div>
              <div className="text-gray-300 text-sm">6:00 AM - 2:00 PM</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="text-purple-400 font-semibold mb-2">🌆 Dusk Theme</div>
              <div className="text-gray-300 text-sm">2:00 PM - 8:00 PM</div>
            </div>
            <div className="bg-gray-900 rounded-xl p-4">
              <div className="text-blue-400 font-semibold mb-2">🌙 Dark Theme</div>
              <div className="text-gray-300 text-sm">8:00 PM - 6:00 AM</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
