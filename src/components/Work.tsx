/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Work() {
  return (
    <section id="work" className="px-6 md:px-10 py-24 md:py-32 bg-paper transition-all duration-300">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading */}
        <div className="flex items-end justify-between mb-14 md:mb-20">
          <div>
            <div className="mono text-[11px] uppercase tracking-[0.25em] mb-4 text-muted">§ 01 — Selected Work</div>
            <h2 className="display text-5xl md:text-7xl text-ink">
              Analytical systems,<br />
              <span className="italic-serif text-rust font-normal">crafted for detail</span>.
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted">
              3 core studies<br />of 8 research units
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="space-y-24">
          {PROJECTS.map((project: Project, index: number) => {
            return (
              <div 
                key={project.id} 
                className="work-card group block reveal border-b rule pb-12 last:border-0"
                id={`project-${project.id}`}
              >
                {/* Project Header Row */}
                <div className="grid grid-cols-12 gap-6 items-end mb-6">
                  <div className="col-span-2 mono text-[11px] text-muted num">{project.num} / 03</div>
                  <div className="col-span-10 md:col-span-6">
                    <h3 className="serif text-3xl md:text-4xl tracking-tight text-ink font-medium">
                      {project.title} <span className="italic-serif text-rust font-normal">— {project.subtitle}</span>
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-4 md:col-start-9 text-right md:text-right mono text-[11px] uppercase tracking-[0.2em] text-muted">
                    {project.category} · {project.year}
                  </div>
                </div>

                {/* Main Visual Presentation */}
                <div className="relative overflow-hidden aspect-[16/9] md:aspect-[2.2/1] border border-ink/10 rounded-sm bg-paper-dark transition-all duration-500">
                  <div className="w-full h-full relative flex flex-col justify-between p-8 md:p-12 overflow-hidden select-none">
                    {/* Abstract editorial background */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none text-ink">
                      <span className="display text-[30vw] font-bold">{project.num}</span>
                    </div>
                    
                    {/* Top decorative badge */}
                    <div className="flex justify-between items-start">
                      <div className="mono text-[10px] tracking-[0.15em] border border-ink/25 text-ink rounded-full px-3 py-1 bg-paper/60 uppercase">
                        {project.technologies.join(' · ')}
                      </div>
                      <div className="w-6 h-6 rounded-full border border-ink/10 flex items-center justify-center bg-paper/50">
                        <span className="text-xs text-rust">✦</span>
                      </div>
                    </div>

                    {/* Middle layout: Clean high-contrast typography diagram */}
                    <div className="max-w-2xl">
                      <div className="mono text-[10px] uppercase tracking-[0.2em] text-rust mb-3">Key Performance Metrics</div>
                      <div className="grid grid-cols-3 gap-6 md:gap-12">
                        {project.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="border-l border-rust/30 pl-4">
                            <div className="display text-3xl md:text-5xl font-light text-ink num">{m.value}</div>
                            <div className="mono text-[10px] uppercase tracking-[0.15em] text-muted mt-1">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div className="flex justify-between items-end border-t border-ink/10 pt-4 mt-4">
                      <div className="text-[10px] mono text-muted uppercase tracking-wider">
                        High-Fidelity Exploratory Research Data Unit
                      </div>
                      <div className="text-[10px] mono text-rust uppercase tracking-wider font-semibold">
                        Ready for review
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Details Row */}
                <div className="grid grid-cols-12 gap-8 mt-8 pt-8 border-t border-ink/5">
                  {/* Left Column: Big Project Narrative */}
                  <div className="col-span-12 md:col-span-5 flex flex-col justify-between">
                    <div>
                      <h4 className="mono text-[10px] uppercase tracking-[0.2em] text-rust mb-3">Project Narrative</h4>
                      <p className="text-base md:text-lg leading-relaxed text-ink font-light">
                        {project.description}
                      </p>
                    </div>
                    {/* Technologies tags here */}
                    <div className="mt-6">
                      <div className="mono text-[9px] uppercase tracking-[0.2em] text-muted mb-2">Technologies Used</div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="mono text-[9px] bg-paper-dark px-2.5 py-1 rounded-sm border border-ink/5 text-ink/85">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Detailed Findings & Implementation */}
                  <div className="col-span-12 md:col-span-4">
                    <h4 className="mono text-[10px] uppercase tracking-[0.2em] text-rust mb-3">Technical Implementation & Insights</h4>
                    <ul className="space-y-3.5 text-[13px] leading-relaxed text-muted">
                      {project.extendedDetails?.map((detail, dIdx) => (
                        <li key={dIdx} className="flex gap-2.5 items-start">
                          <span className="text-rust text-[11px] mono font-medium leading-none">0{dIdx + 1}.</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column: Verification & Deployment */}
                  <div className="col-span-12 md:col-span-3 flex flex-col justify-between border-t md:border-t-0 md:border-l rule pt-6 md:pt-0 md:pl-8">
                    <div>
                      <h4 className="mono text-[10px] uppercase tracking-[0.2em] text-rust mb-3">Recruiter Verification</h4>
                      <p className="text-[12px] text-muted mb-4 leading-normal font-light">
                        Verify the development files, full source code repositories, or experience the application in production.
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <a 
                        href={project.githubUrl}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-between w-full p-3.5 bg-paper-dark border border-ink/15 hover:border-ink hover:bg-ink hover:text-paper rounded transition-all duration-300 group/link"
                      >
                        <div className="flex items-center gap-2.5">
                          <Github size={15} className="text-ink group-hover/link:text-paper" />
                          <span className="mono text-[10px] uppercase tracking-[0.15em] font-medium">Source Code</span>
                        </div>
                        <ArrowUpRight size={13} className="text-muted group-hover/link:text-paper" />
                      </a>

                      {project.liveUrl ? (
                        <a 
                          href={project.liveUrl}
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between w-full p-3.5 bg-rust/5 border border-rust/40 hover:border-rust hover:bg-rust hover:text-paper rounded transition-all duration-300 group/link animate-pulse"
                        >
                          <div className="flex items-center gap-2.5">
                            <ExternalLink size={15} className="text-rust group-hover/link:text-paper" />
                            <span className="mono text-[10px] uppercase tracking-[0.15em] font-semibold text-rust group-hover/link:text-paper">Live Dashboard</span>
                          </div>
                          <ArrowUpRight size={13} className="text-rust group-hover/link:text-paper" />
                        </a>
                      ) : (
                        <div className="p-3.5 border border-ink/5 bg-paper-dark/30 rounded flex flex-col justify-center">
                          <div className="mono text-[9px] uppercase text-muted tracking-wider">Status</div>
                          <div className="text-[11px] text-muted font-light mt-0.5">Local Execution Only</div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
