/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PERSONAL_DETAILS } from '../data';

export default function Footer() {
  const handleBackToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="app-footer" className="px-6 md:px-10 py-16 bg-ink text-paper border-t border-paper/10 transition-all duration-300">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Left Side: Logo & Copyright */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full border border-paper/20 flex items-center justify-center bg-[#24211e]">
            <span className="serif text-sm italic text-rust font-semibold">m</span>
          </div>
          <span className="mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
            © {new Date().getFullYear()} {PERSONAL_DETAILS.name} — All rights reserved
          </span>
        </div>

        {/* Right Side: Font specs & Back to top */}
        <div className="flex items-center gap-6 mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
          <span>Set in Fraunces & Inter</span>
          <span className="hidden md:inline">·</span>
          <a 
            href="#top" 
            onClick={handleBackToTop}
            className="text-paper hover:text-rust transition-colors"
          >
            Back to top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}
