/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

const SKILL_TAGS = [
  "Machine Learning",
  "Data Analysis",
  "Deep Learning",
  "Natural Language Processing",
  "ETL Pipelines",
  "Data Visualization",
  "Statistical Inference",
  "Predictive Modeling",
  "Feature Engineering",
  "Interactive Dashboards"
];

export default function Marquee() {
  return (
    <section id="marquee-section" className="border-y rule py-5 overflow-hidden bg-paper-dark">
      <div className="marquee mono text-xs uppercase tracking-[0.25em] text-ink">
        <div className="ticker-item">
          {SKILL_TAGS.map((tag, idx) => (
            <span key={`ticker-1-${idx}`} className="flex items-center gap-6">
              <span>{tag}</span>
              {idx < SKILL_TAGS.length && <span className="ticker-sep"></span>}
            </span>
          ))}
        </div>
        <div className="ticker-item" aria-hidden="true">
          {SKILL_TAGS.map((tag, idx) => (
            <span key={`ticker-2-${idx}`} className="flex items-center gap-6">
              <span>{tag}</span>
              {idx < SKILL_TAGS.length && <span className="ticker-sep"></span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
