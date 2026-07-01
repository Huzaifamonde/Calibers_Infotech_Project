import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="p-2.5 rounded-full border border-line dark:border-white/10 bg-white dark:bg-navy-soft text-ink dark:text-white hover:text-primary dark:hover:text-accent transition-all duration-200 shadow-sm cursor-pointer"
      aria-label="Toggle Theme"
    >
      {isDark ? <Sun className="w-[18px] h-[18px] text-accent" /> : <Moon className="w-[18px] h-[18px] text-primary" />}
    </button>
  );
}
