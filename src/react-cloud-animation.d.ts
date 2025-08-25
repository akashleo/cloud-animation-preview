declare module 'react-cloud-animation' {
  import { ReactNode } from 'react';

  export interface ThemeProviderProps {
    children: ReactNode;
    theme?: 'light' | 'dark' | 'dusk';
  }

  export interface CloudAnimationProps {
    cloudImages?: string[];
    animationSpeeds?: number[];
    customColors?: {
      light?: { default: string; clouds: string };
      dark?: { default: string; clouds: string };
      dusk?: { default: string; clouds: string };
    };
    className?: string;
  }

  export interface UseThemeReturn {
    theme: 'light' | 'dark' | 'dusk';
    setTheme: (theme: 'light' | 'dark' | 'dusk') => void;
    backgroundEffect: 'default' | 'clouds';
    toggleBackgroundEffect: () => void;
    isAnimating: boolean;
    currentTime: string;
    isUserControlled: boolean;
    resetToAutoTheme: () => void;
  }

  export function ThemeProvider(props: ThemeProviderProps): JSX.Element;
  export function CloudAnimation(props: CloudAnimationProps): JSX.Element;
  export function useTheme(): UseThemeReturn;
}
