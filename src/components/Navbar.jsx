import { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gradient-to-r from-teal-400 via-purple-500 to-blue-500 shadow-[0_0_24px_6px_rgba(99,102,241,0.45)]" />
            <span className="font-semibold tracking-wide text-white/90">Shivani.dev</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="h-5 w-px bg-white/10" />
            <div className="flex items-center gap-4">
              <a href="https://github.com/" aria-label="GitHub" className="text-white/70 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com/" aria-label="LinkedIn" className="text-white/70 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#contact" aria-label="Email" className="text-white/70 hover:text-white transition-colors">
                <Mail size={18} />
              </a>
            </div>
          </nav>

          <button
            aria-label="Menu"
            className="md:hidden text-white/90"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-black/60">
          <div className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 pt-2">
              <a href="https://github.com/" className="text-white/70 hover:text-white"><Github size={18} /></a>
              <a href="https://linkedin.com/" className="text-white/70 hover:text-white"><Linkedin size={18} /></a>
              <a href="#contact" className="text-white/70 hover:text-white"><Mail size={18} /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
