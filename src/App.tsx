/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Work from './components/Work';
import About from './components/About';
import Credentials from './components/Credentials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [cursorHovered, setCursorHovered] = useState(false);

  // Custom Cursor trailing effect
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    let cx = 0, cy = 0;
    let tx = 0, ty = 0;

    const handleMouseMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let active = true;
    const loop = () => {
      if (!active) return;
      cx += (tx - cx) * 0.18;
      cy += (ty - cy) * 0.18;
      if (cursor) {
        cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      }
      requestAnimationFrame(loop);
    };
    loop();

    // Hover detection for interactive items
    const handleMouseEnter = () => setCursorHovered(true);
    const handleMouseLeave = () => setCursorHovered(false);

    const updateHoverListeners = () => {
      const links = document.querySelectorAll('a, button, [role="button"], .work-card, .index-row');
      links.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    };

    // Delay listener assignment slightly to let children render
    const timeout = setTimeout(updateHoverListeners, 1000);

    // Observe body for changes to keep hover listeners active on dynamically filtered indexes
    const observer = new MutationObserver(updateHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      active = false;
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  // Standard intersection scroll-reveal animations
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => io.observe(el));

    return () => {
      revealElements.forEach((el) => io.unobserve(el));
    };
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen selection:bg-rust selection:text-paper" id="app-root-container">
      {/* Decorative grain film overlay */}
      <div className="grain"></div>

      {/* Elegant trailing cursor dot on desktop */}
      <div 
        ref={cursorRef} 
        className="cursor-dot hidden md:block" 
        style={{
          width: cursorHovered ? '32px' : '8px',
          height: cursorHovered ? '32px' : '8px',
          background: cursorHovered ? 'transparent' : 'var(--color-rust)',
          border: cursorHovered ? '1px solid var(--color-rust)' : 'none',
          boxSizing: 'border-box'
        }}
      />

      {/* Main Structural Layout */}
      <Header />
      
      <main id="top-anchor">
        <Hero />
        <Marquee />
        <Work />
        <About />
        <Credentials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
