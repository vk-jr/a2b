import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'system';
    }
    return 'system';
  });
  
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const initialTheme = localStorage.getItem('theme') as Theme || 'system';
    setTheme(initialTheme);

    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
        if (theme === 'system') {
            const newColorScheme = e.matches ? 'dark' : 'light';
            setResolvedTheme(newColorScheme);
            root.classList.toggle('dark', e.matches);
        }
    };
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    if (initialTheme === 'system') {
        const systemTheme = mediaQuery.matches ? 'dark' : 'light';
        setResolvedTheme(systemTheme);
        root.classList.toggle('dark', mediaQuery.matches);
    } else {
        setResolvedTheme(initialTheme);
        root.classList.toggle('dark', initialTheme === 'dark');
    }
    
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
        mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
}, [theme]);

  const handleSetTheme = (newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    const root = window.document.documentElement;
     if (newTheme === 'system') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setResolvedTheme(mediaQuery.matches ? 'dark' : 'light');
        root.classList.toggle('dark', mediaQuery.matches);
     } else {
        setResolvedTheme(newTheme);
        root.classList.toggle('dark', newTheme === 'dark');
     }
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
