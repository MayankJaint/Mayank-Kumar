/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PERSONAL_DETAILS, TECHNICAL_SKILLS, EDUCATION } from '../data';

export default function About() {
  const [activeTab, setActiveTab] = useState<'narrative' | 'education'>('education');
  const [gridPoints, setGridPoints] = useState<{ x: number; y: number }[]>([]);
  const [regressionLine, setRegressionLine] = useState<{ x1: number; y1: number; x2: number; y2: number }>({ x1: 0, y1: 0, x2: 0, y2: 0 });

  // Generate real-time random coordinates for the interactive analytical visualizer
  useEffect(() => {
    const points = Array.from({ length: 12 }, () => ({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    }));
    setGridPoints(points);

    // Simple linear regression simulation
    if (points.length > 0) {
      let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
      points.forEach(p => {
        sumX += p.x;
        sumY += p.y;
        sumXY += (p.x * p.y);
        sumXX += (p.x * p.x);
      });
      const m = (points.length * sumXY - sumX * sumY) / (points.length * sumXX - sumX * sumX || 1);
      const c = (sumY - m * sumX) / points.length;

      setRegressionLine({
        x1: 5,
        y1: m * 5 + c,
        x2: 95,
        y2: m * 95 + c
      });
    }
  }, []);

  const regeneratePoints = () => {
    const points = Array.from({ length: 12 }, () => ({
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10
    }));
    setGridPoints(points);
    let sumX = 0, sumY = 0, sumXY = 0, sumXX = 0;
    points.forEach(p => {
      sumX += p.x;
      sumY += p.y;
      sumXY += (p.x * p.y);
      sumXX += (p.x * p.x);
    });
    const m = (points.length * sumXY - sumX * sumY) / (points.length * sumXX - sumX * sumX || 1);
    const c = (sumY - m * sumX) / points.length;

    setRegressionLine({
      x1: 5,
      y1: m * 5 + c,
      x2: 95,
      y2: m * 95 + c
    });
  };

  return (
    <section id="about" className="px-6 md:px-10 py-24 md:py-32 border-t rule bg-paper-dark">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-6">
        
        {/* Sticky Left Column: Abstract Tech Visualizer */}
        <div className="col-span-12 md:col-span-4">
          <div className="mono text-[11px] uppercase tracking-[0.25em] mb-6 text-muted">§ 02 — About & Background</div>
          <div className="sticky top-32">
            
            {/* Live-calculating SVG Scatter Plot Container */}
            <div className="aspect-[3/4] overflow-hidden mb-4 border border-ink/15 rounded bg-paper p-6 relative flex flex-col justify-between">
              <div className="flex justify-between items-center border-b border-ink/5 pb-2">
                <span className="mono text-[9px] uppercase tracking-[0.15em] text-muted">Stochastic Regression Sim</span>
                <button 
                  onClick={regeneratePoints}
                  className="mono text-[8px] tracking-[0.1em] border border-rust/40 text-rust px-2 py-0.5 rounded-full hover:bg-rust hover:text-paper transition-all duration-300"
                >
                  RE-SAMPLE
                </button>
              </div>

              {/* The interactive coordinate grid */}
              <div className="relative flex-grow my-4 border-l border-b border-ink/10 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  {[25, 50, 75].map((g) => (
                    <line key={`v-${g}`} x1={g} y1="0" x2={g} y2="100" stroke="rgba(26, 23, 20, 0.03)" strokeWidth="0.5" />
                  ))}
                  {[25, 50, 75].map((g) => (
                    <line key={`h-${g}`} x1="0" y1={g} x2="100" y2={g} stroke="rgba(26, 23, 20, 0.03)" strokeWidth="0.5" />
                  ))}

                  {/* Regression Fit Line */}
                  <line 
                    x1={regressionLine.x1} 
                    y1={100 - regressionLine.y1} 
                    x2={regressionLine.x2} 
                    y2={100 - regressionLine.y2} 
                    stroke="var(--color-rust)" 
                    strokeWidth="1" 
                    strokeDasharray="2,2"
                    className="transition-all duration-700"
                  />

                  {/* Plot Scatter Dots */}
                  {gridPoints.map((p, idx) => (
                    <circle 
                      key={idx} 
                      cx={p.x} 
                      cy={100 - p.y} 
                      r="2" 
                      fill="var(--color-ink)" 
                      className="transition-all duration-700"
                      style={{ transitionDelay: `${idx * 40}ms` }}
                    />
                  ))}
                </svg>
                <div className="absolute bottom-1 right-2 mono text-[8px] text-muted font-light">MSE: 0.024</div>
              </div>

              <div className="border-t border-ink/5 pt-2">
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-ink font-semibold">Coordinate Array</div>
                <div className="mono text-[8px] text-muted overflow-hidden h-6 mt-1 flex gap-2 flex-wrap">
                  {gridPoints.slice(0, 4).map((p, idx) => (
                    <span key={idx}>[{p.x.toFixed(0)}, {p.y.toFixed(0)}]</span>
                  ))}
                  <span>...</span>
                </div>
              </div>
            </div>

            <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Interactive SVG Renderer · Realtime compute
            </div>
          </div>
        </div>

        {/* Right Column: Statement, Details, Tabs */}
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          <h2 className="display text-4xl md:text-6xl mb-10 text-ink leading-tight">
            Designed to rigorously <span className="italic-serif text-rust font-normal">isolate the signal</span> from the noise.
          </h2>

          {/* Toggle Tabs */}
          <div className="flex gap-6 border-b rule pb-4 mb-8">
            <button
              onClick={() => setActiveTab('education')}
              className={`serif text-lg font-medium transition-all relative ${
                activeTab === 'education' ? 'text-rust' : 'text-muted hover:text-ink'
              }`}
            >
              Academic Curriculum
              {activeTab === 'education' && (
                <span className="absolute bottom-[-17px] left-0 right-0 h-[1.5px] bg-rust"></span>
              )}
            </button>
            <button
              onClick={() => setActiveTab('narrative')}
              className={`serif text-lg font-medium transition-all relative ${
                activeTab === 'narrative' ? 'text-rust' : 'text-muted hover:text-ink'
              }`}
            >
              Professional Summary
              {activeTab === 'narrative' && (
                <span className="absolute bottom-[-17px] left-0 right-0 h-[1.5px] bg-rust"></span>
              )}
            </button>
          </div>

          {/* Tab Content 1: Philosophy & Skills */}
          {activeTab === 'narrative' ? (
            <div className="space-y-6 text-[17px] leading-relaxed max-w-2xl text-ink">
              <p>
                My analytical foundation is rooted in physical and mathematical principles—learning how core parameters shape intricate physical systems, and why rigorous data validation is vital before implementing any predictive algorithm. 
              </p>
              <p>
                I approach data science end-to-end: handling complex multi-source ETL pipelines, cleaning unstructured files with list explosions, developing deep learning models (CNN, RNN, LSTM), and writing bespoke Streamlit application code. I believe that an analytical model is only as powerful as its structural design and the clarity of its insights.
              </p>
              <p className="text-muted">
                I am actively involved in developing rapid data prototypes and recommendation systems, participating in hackathons, and presenting complex analytical outcomes clearly.
              </p>

              {/* Skill matrix lists */}
              <div className="mt-12 pt-10 border-t rule">
                <h3 className="mono text-[10px] uppercase tracking-[0.25em] text-muted mb-6">Expertise Taxonomy</h3>
                <div className="space-y-6">
                  {TECHNICAL_SKILLS.map((skillGroup, index) => (
                    <div key={index} className="grid grid-cols-12 gap-2 text-sm border-b rule pb-4 last:border-0 last:pb-0">
                      <div className="col-span-12 md:col-span-4 font-semibold text-ink">{skillGroup.category}</div>
                      <div className="col-span-12 md:col-span-8 flex flex-wrap gap-1.5 mt-1 md:mt-0">
                        {skillGroup.items.map((item, itemIdx) => (
                          <span key={itemIdx} className="text-xs bg-paper px-2.5 py-1 rounded border border-ink/5 text-muted hover:text-rust transition-colors">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            // Tab Content 2: Education
            <div className="space-y-10 max-w-2xl">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="border-b rule pb-8 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                    <h3 className="serif text-xl md:text-2xl font-medium text-ink">{edu.title}</h3>
                    <span className="mono text-[10px] uppercase tracking-[0.15em] bg-rust/10 text-rust border border-rust/20 px-2.5 py-0.5 rounded-full">
                      {edu.status}
                    </span>
                  </div>
                  <div className="mono text-xs text-muted mb-3 uppercase tracking-wider">{edu.institution}</div>
                  <p className="text-sm leading-relaxed text-muted">{edu.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* Core Numerical Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 border-t rule pt-10" id="about-stats-row">
            <div>
              <div className="display text-5xl md:text-6xl text-ink num">100k+</div>
              <div className="mono text-[9px] uppercase tracking-[0.2em] mt-2 text-muted">Records Analyzed</div>
            </div>
            <div>
              <div className="display text-5xl md:text-6xl text-ink num">04+</div>
              <div className="mono text-[9px] uppercase tracking-[0.2em] mt-2 text-muted">Certificates & Awards</div>
            </div>
            <div>
              <div className="display text-5xl md:text-6xl text-ink num">99%</div>
              <div className="mono text-[9px] uppercase tracking-[0.2em] mt-2 text-muted">Pipeline Accuracy</div>
            </div>
            <div>
              <div className="display text-5xl md:text-6xl text-ink num">05+</div>
              <div className="mono text-[9px] uppercase tracking-[0.2em] mt-2 text-muted">Major Research Projects</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
