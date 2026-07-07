/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        id="app-header"
        className="fixed top-0 left-0 right-0 z-40 px-6 md:px-10 py-5 flex items-center justify-between transition-all duration-300"
        style={{
          backdropFilter: isScrolled ? 'blur(12px)' : 'blur(4px)',
          background: isScrolled ? 'rgba(243, 236, 225, 0.85)' : 'rgba(243, 236, 225, 0.4)',
          borderBottom: isScrolled ? '1px solid rgba(26, 23, 20, 0.08)' : '1px solid transparent'
        }}
      >
        <a href="#top" className="flex items-center gap-3 group" id="nav-logo">
          <div className="w-9 h-9 rounded-full border border-ink flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:rotate-12 bg-paper-dark">
            <span className="serif text-lg italic text-rust font-medium">m</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-9 text-sm" id="desktop-nav">
          <a href="#work" className="nav-link text-ink/80 hover:text-ink transition-colors"><span className="dot"></span>Work</a>
          <a href="#about" className="nav-link text-ink/80 hover:text-ink transition-colors"><span className="dot"></span>About</a>
          <a 
            href={PERSONAL_DETAILS.resume} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="nav-link text-rust hover:text-ink transition-colors font-medium flex items-center gap-1"
          >
            Resume
          </a>
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2.5 text-sm group" id="nav-status">
          <span className="link-underline text-ink/90 font-medium">Available for Collaboration</span>
          <span 
            className="w-2 h-2 rounded-full bg-moss" 
            style={{
              boxShadow: '0 0 0 3px rgba(61,74,42,0.18)',
              animation: 'pulse 2.4s ease infinite'
            }}
          ></span>
        </a>

        <button 
          id="mobile-menu-toggle"
          className="md:hidden flex p-2 text-ink"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* MOBILE MENU */}
      <div 
        id="mobile-menu"
        className={`fixed inset-0 z-30 bg-paper flex flex-col justify-center px-8 transition-transform duration-500 md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-8 serif text-4xl font-light">
          <a href="#work" className="hover:text-rust transition-colors" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#about" className="hover:text-rust transition-colors" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href={PERSONAL_DETAILS.resume} target="_blank" rel="noopener noreferrer" className="hover:text-rust transition-colors text-rust font-medium" onClick={() => setMobileMenuOpen(false)}>Resume</a>
          <a href="#contact" className="hover:text-rust transition-colors italic text-rust" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </nav>
        <div className="absolute bottom-10 left-8 right-8 flex justify-between items-center border-t rule pt-6">
          <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted">Based in Hisar, India</div>
          <span 
            className="w-2.5 h-2.5 rounded-full bg-moss"
            style={{
              boxShadow: '0 0 0 3px rgba(61,74,42,0.18)',
              animation: 'pulse 2.4s ease infinite'
            }}
          ></span>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(61,74,42,0.18); }
          50% { box-shadow: 0 0 0 7px rgba(61,74,42,0.04); }
        }
      `}</style>
    </>
  );
}
