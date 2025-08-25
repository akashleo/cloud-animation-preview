import React from 'react';
import { useTheme } from 'react-cloud-animation';

export const DocsSection: React.FC = () => {
  const { theme } = useTheme();

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

  const getSecondaryTextColor = () => {
    if (theme === 'dark') return 'text-gray-300';
    if (theme === 'dusk') return 'text-gray-200';
    return 'text-gray-600';
  };

  const getCodeBg = () => {
    if (theme === 'dark') return 'bg-gray-900/80';
    if (theme === 'dusk') return 'bg-gray-900/80';
    return 'bg-gray-100/80';
  };

  return (
    <section id="docs" className="max-w-7xl mx-auto px-6 py-20">
      <div className={`${getCardBg()} backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20`}>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className={`text-4xl font-bold ${getTextColor()} mb-4`}>
              React Cloud Animation
            </h2>
            <p className={`text-lg ${getSecondaryTextColor()}`}>
              An interactive cloud animation system with theme-aware backgrounds for React applications. 
              Features smooth marquee-style cloud movements, automatic time-based theming, and customizable animations.
            </p>
          </div>

          {/* Features */}
          <div className="mb-12">
            <h3 className={`text-2xl font-bold ${getTextColor()} mb-6`}>Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                '🌤️ Animated Clouds - 5 clouds with continuous marquee movement',
                '🎨 Theme System - Dark, Light, and Dusk themes with automatic time-based switching',
                '🌍 Cloud Toggle Button - Icon-based toggle button with Cloud/CloudOff icons',
                '⚡ Performance Optimized - GPU-accelerated animations using CSS transforms',
                '🎯 TypeScript Support - Full type definitions included',
                '📱 Responsive - Works on all screen sizes',
                '🎨 Customizable - Configure colors, speeds, and cloud images',
                '♿ Accessible - Full keyboard navigation and screen reader support'
              ].map((feature, index) => (
                <div key={index} className={`${getSecondaryTextColor()} flex items-start gap-2`}>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Installation */}
          <div className="mb-12">
            <h3 className={`text-2xl font-bold ${getTextColor()} mb-6`}>Installation</h3>
            <div className={`${getCodeBg()} rounded-lg p-4 font-mono text-sm`}>
              <div className={getTextColor()}>npm install react-cloud-animation</div>
              <div className={`${getSecondaryTextColor()} mt-2`}># or</div>
              <div className={getTextColor()}>yarn add react-cloud-animation</div>
            </div>
          </div>

          {/* Quick Start */}
          <div className="mb-12">
            <h3 className={`text-2xl font-bold ${getTextColor()} mb-6`}>Quick Start</h3>
            <div className={`${getCodeBg()} rounded-lg p-4 font-mono text-sm overflow-x-auto`}>
              <pre className={getTextColor()}>
{`import { ThemeProvider, CloudAnimation, ThemeToggle, CloudToggleButton } from 'react-cloud-animation';
import 'react-cloud-animation/dist/style.css';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <CloudAnimation />
        <ThemeToggle />
        <CloudToggleButton />
        {/* Your content */}
      </div>
    </ThemeProvider>
  );
}`}
              </pre>
            </div>
          </div>

          {/* API Reference */}
          <div className="mb-12">
            <h3 className={`text-2xl font-bold ${getTextColor()} mb-6`}>API Reference</h3>
            
            {/* Components */}
            <div className="mb-8">
              <h4 className={`text-xl font-semibold ${getTextColor()} mb-4`}>Components</h4>
              
              {/* ThemeProvider */}
              <div className="mb-6">
                <h5 className={`text-lg font-medium ${getTextColor()} mb-2`}>&lt;ThemeProvider&gt;</h5>
                <p className={`${getSecondaryTextColor()} mb-3`}>Wraps your application to provide theme context.</p>
                <div className={`${getCodeBg()} rounded-lg p-3 font-mono text-sm`}>
                  <pre className={getTextColor()}>{`<ThemeProvider>
  {children}
</ThemeProvider>`}</pre>
                </div>
              </div>

              {/* CloudAnimation */}
              <div className="mb-6">
                <h5 className={`text-lg font-medium ${getTextColor()} mb-2`}>&lt;CloudAnimation&gt;</h5>
                <p className={`${getSecondaryTextColor()} mb-3`}>Renders the animated cloud background.</p>
                <div className="mb-3">
                  <p className={`${getTextColor()} font-medium mb-2`}>Props:</p>
                  <ul className={`${getSecondaryTextColor()} space-y-1 ml-4`}>
                    <li>• <code>cloudImages?: string[]</code> - Array of cloud image paths (default: 5 built-in clouds)</li>
                    <li>• <code>animationSpeeds?: number[]</code> - Animation duration in seconds for each cloud (default: [40, 45, 50, 55, 60])</li>
                    <li>• <code>customColors?: object</code> - Custom color configuration for themes</li>
                  </ul>
                </div>
                <div className={`${getCodeBg()} rounded-lg p-3 font-mono text-sm overflow-x-auto`}>
                  <pre className={getTextColor()}>{`<CloudAnimation
  cloudImages={['/cloud1.png', '/cloud2.png']}
  animationSpeeds={[30, 35]}
  customColors={{
    light: { default: '#f0f0f0', clouds: '#87CEEB' },
    dark: { default: '#000000', clouds: '#141852' },
    dusk: { default: '#4E5481', clouds: '#d2c4f4' }
  }}
/>`}</pre>
                </div>
              </div>

              {/* ThemeToggle */}
              <div className="mb-6">
                <h5 className={`text-lg font-medium ${getTextColor()} mb-2`}>&lt;ThemeToggle&gt;</h5>
                <p className={`${getSecondaryTextColor()} mb-3`}>Theme switcher button with icons.</p>
                <div className="mb-3">
                  <p className={`${getTextColor()} font-medium mb-2`}>Props:</p>
                  <ul className={`${getSecondaryTextColor()} space-y-1 ml-4`}>
                    <li>• <code>className?: string</code> - Additional CSS classes</li>
                    <li>• <code>size?: number</code> - Icon size (default: 5)</li>
                  </ul>
                </div>
                <div className={`${getCodeBg()} rounded-lg p-3 font-mono text-sm`}>
                  <pre className={getTextColor()}>{`<ThemeToggle className="my-custom-class" size={6} />`}</pre>
                </div>
              </div>

              {/* CloudToggleButton */}
              <div className="mb-6">
                <h5 className={`text-lg font-medium ${getTextColor()} mb-2`}>&lt;CloudToggleButton&gt;</h5>
                <p className={`${getSecondaryTextColor()} mb-3`}>Icon-based button that toggles cloud animations. Shows Cloud icon when clouds are active, CloudOff when inactive.</p>
                <div className="mb-3">
                  <p className={`${getTextColor()} font-medium mb-2`}>Props:</p>
                  <ul className={`${getSecondaryTextColor()} space-y-1 ml-4`}>
                    <li>• <code>className?: string</code> - Additional CSS classes</li>
                  </ul>
                </div>
                <div className={`${getCodeBg()} rounded-lg p-3 font-mono text-sm mb-3`}>
                  <pre className={getTextColor()}>{`<CloudToggleButton className="my-custom-class" />`}</pre>
                </div>
                <div className="mb-3">
                  <p className={`${getTextColor()} font-medium mb-2`}>Features:</p>
                  <ul className={`${getSecondaryTextColor()} space-y-1 ml-4`}>
                    <li>• <strong>Theme-Aware:</strong> Adapts colors based on current theme (light/dark mode)</li>
                    <li>• <strong>Icon Toggle:</strong> Cloud icon when active, CloudOff when inactive</li>
                    <li>• <strong>Accessibility:</strong> Includes title attribute for screen readers</li>
                    <li>• <strong>Hover Effects:</strong> Smooth color transitions on hover</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hooks */}
            <div className="mb-8">
              <h4 className={`text-xl font-semibold ${getTextColor()} mb-4`}>Hooks</h4>
              <div className="mb-6">
                <h5 className={`text-lg font-medium ${getTextColor()} mb-2`}>useTheme()</h5>
                <p className={`${getSecondaryTextColor()} mb-3`}>Access theme context within ThemeProvider.</p>
                <div className={`${getCodeBg()} rounded-lg p-3 font-mono text-sm overflow-x-auto`}>
                  <pre className={getTextColor()}>{`const {
  theme,              // Current theme: 'dark' | 'light' | 'dusk'
  setTheme,           // Set theme manually
  backgroundEffect,   // Current effect: 'default' | 'clouds'
  toggleBackgroundEffect, // Toggle between default and clouds
  isAnimating,        // Animation state
  currentTime,        // Current time string
  isUserControlled,   // Whether theme is manually set
  resetToAutoTheme    // Reset to automatic time-based theme
} = useTheme();`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Theme System */}
          <div className="mb-12">
            <h3 className={`text-2xl font-bold ${getTextColor()} mb-6`}>Theme System</h3>
            
            <div className="mb-6">
              <h4 className={`text-xl font-semibold ${getTextColor()} mb-4`}>Automatic Time-Based Themes</h4>
              <ul className={`${getSecondaryTextColor()} space-y-2 ml-4`}>
                <li>• <strong>Light:</strong> 6:00 AM - 2:00 PM</li>
                <li>• <strong>Dusk:</strong> 2:00 PM - 8:00 PM</li>
                <li>• <strong>Dark:</strong> 8:00 PM - 6:00 AM</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className={`text-xl font-semibold ${getTextColor()} mb-4`}>Manual Theme Control</h4>
              <p className={`${getSecondaryTextColor()}`}>
                Users can override automatic themes by clicking the theme toggle. Right-click to reset to automatic mode.
              </p>
            </div>
          </div>

          {/* Customization */}
          <div className="mb-12">
            <h3 className={`text-2xl font-bold ${getTextColor()} mb-6`}>Customization</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className={`text-lg font-semibold ${getTextColor()} mb-3`}>Custom Cloud Images</h4>
                <div className={`${getCodeBg()} rounded-lg p-3 font-mono text-sm`}>
                  <pre className={getTextColor()}>{`<CloudAnimation
  cloudImages={[
    '/assets/custom-cloud1.png',
    '/assets/custom-cloud2.png',
    '/assets/custom-cloud3.png'
  ]}
/>`}</pre>
                </div>
              </div>

              <div>
                <h4 className={`text-lg font-semibold ${getTextColor()} mb-3`}>Animation Speeds</h4>
                <div className={`${getCodeBg()} rounded-lg p-3 font-mono text-sm`}>
                  <pre className={getTextColor()}>{`<CloudAnimation
  animationSpeeds={[20, 25, 30, 35, 40]} // Faster animations
/>`}</pre>
                </div>
              </div>

              <div>
                <h4 className={`text-lg font-semibold ${getTextColor()} mb-3`}>Custom Theme Colors</h4>
                <div className={`${getCodeBg()} rounded-lg p-3 font-mono text-sm overflow-x-auto`}>
                  <pre className={getTextColor()}>{`<CloudAnimation
  customColors={{
    light: {
      default: '#ffffff',  // Background when clouds are off
      clouds: '#87CEEB'    // Background when clouds are on
    },
    dark: {
      default: '#1a1a1a',
      clouds: '#2c3e50'
    },
    dusk: {
      default: '#4a5568',
      clouds: '#805ad5'
    }
  }}
/>`}</pre>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <div className="mb-12">
            <h3 className={`text-2xl font-bold ${getTextColor()} mb-6`}>Technical Details</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className={`text-lg font-semibold ${getTextColor()} mb-3`}>CSS Classes</h4>
                <p className={`${getSecondaryTextColor()} mb-3`}>The package provides several CSS classes for styling:</p>
                <ul className={`${getSecondaryTextColor()} space-y-1 ml-4`}>
                  <li>• <code>.cloud-container</code> - Cloud wrapper element</li>
                  <li>• <code>.cloud-img</code> - Individual cloud image</li>
                  <li>• <code>.animate-subtle-glow</code> - Subtle glow animation</li>
                  <li>• <code>.animate-prominent-glow</code> - Prominent glow animation</li>
                  <li>• <code>.theme-toggle-btn</code> - Theme toggle button</li>
                </ul>
              </div>

              <div>
                <h4 className={`text-lg font-semibold ${getTextColor()} mb-3`}>Z-Index Structure</h4>
                <p className={`${getSecondaryTextColor()} mb-3`}>The animation system uses a layered z-index structure:</p>
                <ul className={`${getSecondaryTextColor()} space-y-1 ml-4`}>
                  <li>• <strong>Background:</strong> z-index 10</li>
                  <li>• <strong>Your content:</strong> z-index 20 (recommended)</li>
                  <li>• <strong>Clouds:</strong> z-index 30</li>
                  <li>• <strong>Navigation:</strong> z-index 40+ (recommended)</li>
                </ul>
              </div>

              <div>
                <h4 className={`text-lg font-semibold ${getTextColor()} mb-3`}>Browser Support</h4>
                <ul className={`${getSecondaryTextColor()} space-y-1 ml-4`}>
                  <li>• Chrome/Edge 90+</li>
                  <li>• Firefox 88+</li>
                  <li>• Safari 14+</li>
                  <li>• Opera 76+</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center pt-8 border-t border-gray-200/20">
            <div className="mb-4">
              <h4 className={`text-lg font-semibold ${getTextColor()} mb-2`}>License</h4>
              <p className={getSecondaryTextColor()}>MIT</p>
            </div>
            
            <div className="mb-4">
              <h4 className={`text-lg font-semibold ${getTextColor()} mb-2`}>Contributing</h4>
              <p className={getSecondaryTextColor()}>Contributions are welcome! Please feel free to submit a Pull Request.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
