import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Blog', href: '#blog' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2' : 'py-4'}`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">

            {/* Logo */}
            <a href="#home" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-sm font-black"
                style={{ background: 'linear-gradient(135deg, hsl(258,90%,66%), #ec4899)' }}>
                VK
              </div>
              <span className="text-lg font-bold text-gradient hidden sm:block">Portfolio.</span>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${isActive ? 'text-white' : ''}`}
                    style={!isActive ? { color: 'hsl(var(--muted-foreground))' } : {}}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-full"
                        style={{ background: 'linear-gradient(135deg, hsl(258,90%,66%), #a855f7)' }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-full transition-all duration-200 hover:scale-110"
                style={{ background: 'rgba(139,92,246,0.1)', color: 'hsl(258,90%,66%)' }}
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Mobile burger */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2.5 rounded-full transition-all hover:scale-110"
                style={{ background: 'rgba(139,92,246,0.1)', color: 'hsl(258,90%,66%)' }}
              >
                {isOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-4 right-4 z-40 glass-card p-4"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:scale-[1.02]"
                style={{ color: activeSection === link.href.replace('#','') ? 'hsl(258,90%,66%)' : 'hsl(var(--foreground))', background: activeSection === link.href.replace('#','') ? 'rgba(139,92,246,0.1)' : 'transparent' }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'hsl(258,90%,66%)' }} />
                {link.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
