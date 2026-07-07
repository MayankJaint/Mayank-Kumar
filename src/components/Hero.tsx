/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowRight } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';

export default function Hero() {
  return (
    <section id="hero-section" className="relative min-h-screen pt-32 md:pt-40 px-6 md:px-10 pb-16 overflow-hidden flex flex-col justify-between">
      {/* Dynamic light glows / blobs in background */}
      <div className="blob absolute w-[420px] h-[420px] bg-[#e8b88c] top-[15%] right-[-5%] -z-10 mix-blend-multiply opacity-25"></div>
      <div className="blob absolute w-[340px] h-[340px] bg-rust bottom-[-5%] left-[-2%] -z-10 opacity-10"></div>

      <div className="max-w-[1400px] mx-auto w-full relative">
        {/* Top meta row */}
        <div className="flex items-end justify-between mb-10 md:mb-16" id="hero-meta-row">
          <div className="mono text-[11px] uppercase tracking-[0.25em] text-muted">
            <div>N° 01 / AI & ML PORTFOLIO</div>
            <div className="mt-1">{PERSONAL_DETAILS.location}</div>
          </div>
          <div className="hidden md:block mono text-[11px] uppercase tracking-[0.25em] text-right text-muted">
            <div>Mathematical Rigor</div>
            <div className="mt-1">ML Engineering · Data Pipelines · NLP</div>
          </div>
        </div>

        {/* Big display title */}
        <div className="mb-6" id="hero-name-container">
          <span className="mono text-[11px] md:text-[12px] uppercase tracking-[0.3em] text-rust font-semibold block mb-3">
            AI & ML Engineer & Data Analyst
          </span>
          <h1 className="serif text-5xl sm:text-7xl md:text-8xl tracking-tight text-ink font-semibold leading-tight" id="hero-name-heading">
            {PERSONAL_DETAILS.name}
          </h1>
        </div>

        <h2 className="display text-[7.5vw] md:text-[4.8vw] leading-[1.05] text-muted font-light mt-4 mb-8" id="hero-display-heading">
          Designing the <span className="italic-serif text-rust font-normal">intelligent</span> logic <br className="hidden md:block" />
          between data points<span className="text-rust">.</span>
        </h2>

        {/* Bottom detail columns */}
        <div className="mt-12 md:mt-24 grid grid-cols-12 gap-6 items-end" id="hero-bottom-grid">
          <div className="col-span-12 md:col-span-5">
            <p className="text-[15px] leading-relaxed text-muted max-w-md">
              {PERSONAL_DETAILS.shortBio}
            </p>
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-8">
            <div className="mono text-[10px] uppercase tracking-[0.2em] mb-2 text-muted">Currently</div>
            <div className="text-sm text-ink leading-relaxed">
              Specializing at <span className="italic-serif font-medium text-ink">IIT Guwahati x Masai</span>. Engineering core predictive engines & Streamlit systems.
            </div>
          </div>
          <div className="col-span-6 md:col-span-2 text-right md:text-left flex justify-end md:justify-start">
            <a href="#work" className="inline-flex items-center gap-3 group" id="hero-cta-button">
              <span className="serif italic text-lg text-ink group-hover:text-rust transition-colors font-medium">See work</span>
              <span className="w-10 h-10 rounded-full border border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-paper transition-colors duration-500">
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5" />
              </span>
            </a>
          </div>
        </div>

        {/* Rotating badge */}
        <div className="absolute right-2 md:right-6 top-2 md:top-6 hidden sm:block" id="hero-badge-container">
          <div className="relative w-28 h-28 md:w-32 md:h-32">
            <svg className="badge-rotate w-full h-full" viewBox="0 0 100 100">
              <defs>
                <path id="circle-path" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"/>
              </defs>
              <text className="mono text-[6.5px] uppercase tracking-[2.8px] fill-ink">
                <textPath href="#circle-path">
                  ANALYSIS · DATA SCIENCE · ML ENGINEERING · 2021—2026 ·
                </textPath>
              </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="serif italic text-2xl text-rust">✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
