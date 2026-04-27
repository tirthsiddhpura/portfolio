import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="w-full py-8 mt-20 border-t border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
          © {new Date().getFullYear()} Tirth Siddhapura. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://github.com/tirthsiddhpura" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/tirth-siddhapura" target="_blank" rel="noopener noreferrer"
            className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            <FaLinkedin size={20} />
          </a>
          <a href="mailto:tirthsiddhapura@gmail.com"
            className="p-2 rounded-full transition-colors hover:bg-black/5 dark:hover:bg-white/10"
            style={{ color: 'hsl(var(--muted-foreground))' }}>
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
