import React, { useState } from 'react';
import { Github, Cloud, Menu, X } from 'lucide-react';
import { ThemeToggle, CloudToggleButton, useTheme } from 'react-cloud-animation';

export const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200/20 backdrop-blur-sm animate-slide-up w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Cloud className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
            </div>
            <div className="sm:block">
              <div className="flex items-center gap-2">
                <h1 className={`text-sm sm:text-md font-bold ${getTextColor()}`}>React Cloud Animation</h1>
                <span className="text-xs px-1.5 py-0.5 bg-gray-200/20 rounded text-gray-500 sm:hidden">v0.0.5</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-500 hidden sm:block">v0.0.5</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className={`transition-colors ${getLinkColor()}`}>Features</a>
            <a href="#demo" className={`transition-colors ${getLinkColor()}`}>Demo</a>
            <a href="#docs" className={`transition-colors ${getLinkColor()}`}>Docs</a>
            <a href="#api" className={`transition-colors ${getLinkColor()}`}>API</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg ${getTextColor()}`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center gap-3">
            <CloudToggleButton className="p-2" />
            <ThemeToggle size={5} />
            <a
              href="https://github.com/akashleo/react-cloud-animation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span className="hidden lg:inline">GitHub</span>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200/20">
            <nav className="flex flex-col gap-4 mt-4">
              <a href="#features" className={`transition-colors ${getLinkColor()}`} onClick={() => setIsMobileMenuOpen(false)}>Features</a>
              <a href="#demo" className={`transition-colors ${getLinkColor()}`} onClick={() => setIsMobileMenuOpen(false)}>Demo</a>
              <a href="#docs" className={`transition-colors ${getLinkColor()}`} onClick={() => setIsMobileMenuOpen(false)}>Docs</a>
              <a href="#api" className={`transition-colors ${getLinkColor()}`} onClick={() => setIsMobileMenuOpen(false)}>API</a>
            </nav>
          </div>
        )}

      </div>
      
      {/* Mobile Controls Row - Always visible on mobile */}
      <div className="md:hidden w-full border-t border-gray-200/20 bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <CloudToggleButton className="p-1.5" />
              <ThemeToggle size={4} />
            </div>
            <a
              href="https://github.com/akashleo/react-cloud-animation"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm"
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
