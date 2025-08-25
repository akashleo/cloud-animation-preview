import React from 'react';
import { CloudAnimation, ThemeProvider, useTheme } from 'react-cloud-animation';
import 'react-cloud-animation/dist/style.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { DemoSection } from './components/DemoSection';
import { FeaturesSection } from './components/FeaturesSection';
import { DocsSection } from './components/DocsSection';
import { InstallationSection } from './components/InstallationSection';
import { Footer } from './components/Footer';

// Main App Component
function AppContent() {
  const { theme, backgroundEffect, toggleBackgroundEffect, isUserControlled } = useTheme();

  const getBackgroundClass = () => {
    if (theme === 'dark') return 'bg-gray-900 text-white';
    if (theme === 'dusk') return 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white';
    return 'bg-gradient-to-br from-gray-50 via-white to-blue-50 text-gray-900';
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${getBackgroundClass()}`}>
      {/* Cloud Animation Background - Always rendered based on backgroundEffect */}
      {backgroundEffect === 'clouds' && (
        <CloudAnimation 
          animationSpeeds={[40, 45, 50, 55, 60]}
          className="absolute inset-0 pointer-events-none opacity-30"
        />
      )}

      {/* Navbar */}
      <div className="animate-slide-up">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection theme={theme} />

        {/* Demo Section */}
        <DemoSection />

        {/* Features Section */}
        <FeaturesSection theme={theme} />

         {/* Installation Section */}
         <InstallationSection theme={theme} />

        {/* Docs Section */}
        <DocsSection />

       
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;