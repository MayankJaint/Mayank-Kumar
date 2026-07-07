/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Mail, ArrowRight, Github, Linkedin, Clock, FileText } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data';

export default function Contact() {
  const [indiaTime, setIndiaTime] = useState("--:--");

  useEffect(() => {
    const updateClock = () => {
      try {
        const timeStr = new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        setIndiaTime(timeStr);
      } catch (err) {
        setIndiaTime("--:--");
      }
    };
    updateClock();
    const interval = setInterval(updateClock, 1000 * 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="px-6 md:px-10 py-28 md:py-40 relative overflow-hidden bg-ink text-paper border-t border-paper/10 transition-colors duration-300">
      {/* Background ambient glow blur */}
      <div className="blob absolute w-[520px] h-[520px] bg-rust top-[30%] left-[30%] -z-10 opacity-[0.05] rounded-full filter blur-[120px]"></div>

      <div className="max-w-[1400px] mx-auto relative">
        <div className="mono text-[11px] uppercase tracking-[0.25em] mb-6 text-paper/40">§ 05 — Contact</div>
        
        <h2 className="display text-[11vw] md:text-[8vw] leading-[0.9] text-paper mb-16">
          <span className="block">Let's solve</span>
          <span className="block">something <span className="italic-serif text-rust font-normal">together</span>.</span>
        </h2>

        <div className="mt-14 grid grid-cols-12 gap-6 items-start" id="contact-details-grid">
          {/* Pitch statement */}
          <div className="col-span-12 md:col-span-5 mb-10 md:mb-0">
            <p className="text-lg leading-relaxed text-paper/80 font-light max-w-md">
              Whether you are optimizing a deep learning model, building automated data cleaning pipelines, or designing an interactive Streamlit analytics platform—let's build it with rigor. I respond to emails within one working day.
            </p>
            <a 
              href={`mailto:${PERSONAL_DETAILS.email}`} 
              className="inline-flex items-center gap-3 mt-8 group text-paper hover:text-rust transition-colors duration-300"
              id="contact-mail-link"
            >
              <span className="serif text-2xl md:text-3xl italic link-underline font-medium">{PERSONAL_DETAILS.email}</span>
              <ArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* Social Channels / Location */}
          <div className="col-span-12 sm:col-span-6 md:col-span-3 md:col-start-8 mb-8 sm:mb-0">
            <div className="mono text-[10px] uppercase tracking-[0.2em] mb-3 text-paper/40">Residence</div>
            <div className="text-sm leading-relaxed text-paper font-light">
              Hisar, Haryana<br />
              India · UTC+5:30
            </div>
            
            <div className="mono text-[10px] uppercase tracking-[0.2em] mt-8 mb-3 text-paper/40 font-semibold">Elsewhere</div>
            <div className="flex flex-col gap-2.5 text-sm font-light">
              <a 
                href={PERSONAL_DETAILS.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="link-underline w-fit text-paper/80 hover:text-rust flex items-center gap-1.5"
              >
                <Linkedin size={13} />
                <span>LinkedIn — /mayankkumariitg</span>
              </a>
              <a 
                href={PERSONAL_DETAILS.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="link-underline w-fit text-paper/80 hover:text-rust flex items-center gap-1.5"
              >
                <Github size={13} />
                <span>GitHub — /MayankJaint</span>
              </a>
              <a 
                href={PERSONAL_DETAILS.resume}
                target="_blank" 
                rel="noopener noreferrer"
                className="link-underline w-fit text-rust font-semibold flex items-center gap-1.5 hover:text-paper transition-colors"
              >
                <FileText size={13} />
                <span>Download Resume (PDF)</span>
              </a>
              <a 
                href={`mailto:${PERSONAL_DETAILS.email}`}
                className="link-underline w-fit text-paper/80 hover:text-rust flex items-center gap-1.5"
              >
                <Mail size={13} />
                <span>Direct Mail</span>
              </a>
            </div>
          </div>

          {/* Local Time clock */}
          <div className="col-span-12 sm:col-span-6 md:col-span-2 md:col-start-11 flex flex-col items-start sm:items-end text-left sm:text-right">
            <div className="mono text-[10px] uppercase tracking-[0.2em] mb-3 text-paper/40 flex items-center gap-1">
              <Clock size={11} className="text-rust" />
              <span>Hisar Time</span>
            </div>
            <div className="serif text-4xl md:text-5xl font-light text-paper num" id="clock-display">
              {indiaTime}
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.2em] mt-2 text-paper/40">
              Haryana · IST
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
