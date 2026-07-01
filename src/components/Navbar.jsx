import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Student Corner', path: '/student-corner' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full px-4 sm:px-6 md:px-8 py-4 transition-all duration-300`}>
      <div className={`max-w-7xl mx-auto flex items-center justify-between bg-white/75 dark:bg-navy-soft/75 backdrop-blur-[14px] border border-line dark:border-white/[0.08] rounded-full py-2 px-3 md:px-6 shadow-soft transition-all duration-300 ${scrolled ? 'shadow-md border-primary/20 dark:border-accent/20' : ''}`}>
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent dark:from-primary dark:to-accent flex items-center justify-center text-white font-extrabold text-lg shadow-sm transition-transform duration-300 group-hover:scale-105">
            C
          </div>
          <div>
            <span className="font-sora font-extrabold text-sm md:text-base text-ink dark:text-white leading-none block">
              Calibers InfoTech
            </span>
            <span className="font-mono text-[9px] font-semibold tracking-wider text-ink-muted dark:text-white/60 uppercase leading-none block mt-0.5">
              Real-Time IT Solutions
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `text-[14.5px] font-semibold transition-colors duration-200 cursor-pointer ${
                  isActive
                    ? 'text-primary dark:text-accent font-bold'
                    : 'text-ink-muted dark:text-white/70 hover:text-primary dark:hover:text-accent'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-semibold text-sm bg-gradient-to-br from-primary to-primary-dark text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            Book a Demo
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Menu Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full border border-line dark:border-white/10 bg-white dark:bg-navy-soft text-ink dark:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-4 right-4 bg-white/95 dark:bg-navy-soft/95 backdrop-blur-lg border border-line dark:border-white/[0.08] rounded-2xl p-6 shadow-lg transition-all duration-300">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-base font-semibold py-2 transition-colors duration-200 ${
                    isActive
                      ? 'text-primary dark:text-accent border-l-2 border-primary dark:border-accent pl-3'
                      : 'text-ink-muted dark:text-white/80 hover:text-primary dark:hover:text-accent'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <hr className="border-line dark:border-white/10 my-2" />
            <Link
              to="/contact"
              className="w-full text-center bg-gradient-to-br from-primary to-primary-dark text-white font-semibold py-3 rounded-full shadow-md block hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
            >
              Book a Demo
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
