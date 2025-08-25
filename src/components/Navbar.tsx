import React from 'react';
import { Github, Cloud } from 'lucide-react';
import { ThemeToggle, CloudToggleButton, useTheme } from 'react-cloud-animation';

export const Navbar: React.FC = () => {
  const { theme } = useTheme();

  const getTextColor = () => {
    if (theme === 'dark') return 'text-white';
    if (theme === 'dusk') return 'text-white';
    return 'text-gray-900';
  };

  const getLinkColor = () => {
    if (theme === 'dark') return 'text-gray-300 hover:text-white';
    if (theme === 'dusk') return 'text-gray-200 hover:text-white';
    return 'text-gray-600 hover:text-gray-900';
  };

  return (
    <header className="relative z-10 border-b border-gray-200/20 backdrop-blur-sm animate-slide-up">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Cloud className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className={`text-xl font-bold ${getTextColor()}`}>React Cloud Animation</h1>
              <p className="text-sm text-gray-500">v0.0.4</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className={`transition-colors ${getLinkColor()}`}>Features</a>
            <a href="#demo" className={`transition-colors ${getLinkColor()}`}>Demo</a>
            <a href="#docs" className={`transition-colors ${getLinkColor()}`}>Docs</a>
            <a href="#api" className={`transition-colors ${getLinkColor()}`}>API</a>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* CloudToggleButton - Uses the official component */}
            <CloudToggleButton className="p-2" />

            {/* ThemeToggle */}
            <ThemeToggle size={5} />

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
