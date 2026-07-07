/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Award, FileText, CheckCircle, ExternalLink } from 'lucide-react';
import { CERTIFICATES } from '../data';
import { Certificate } from '../types';
import CertificateModal from './CertificateModal';

export default function Credentials() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  return (
    <section id="credentials" className="px-6 md:px-10 py-24 md:py-32 border-t rule bg-paper">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-14 md:mb-20 gap-6">
          <div>
            <div className="mono text-[11px] uppercase tracking-[0.25em] mb-4 text-muted">§ 04 — Credentials & Verification</div>
            <h2 className="display text-5xl md:text-7xl text-ink">
              Certificates &<br />
              <span className="italic-serif text-rust font-normal">achievements verified</span>.
            </h2>
          </div>
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Click any record to inspect<br />academic verified ledger
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" id="credentials-cards-grid">
          {CERTIFICATES.map((cert) => {
            return (
              <div 
                key={cert.id}
                onClick={() => setSelectedCertificate(cert)}
                className="group border border-ink/15 rounded bg-paper-dark/30 hover:bg-paper-dark hover:border-rust p-6 flex flex-col justify-between aspect-[4/3] cursor-pointer transition-all duration-300 relative overflow-hidden"
              >
                {/* Decorative background logo */}
                <div className="absolute -bottom-6 -right-6 text-ink/[0.03] transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                  <Award size={100} />
                </div>

                <div>
                  {/* Card category badge */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="mono text-[8px] uppercase tracking-widest bg-rust/10 text-rust border border-rust/15 px-2 py-0.5 rounded-full">
                      {cert.category}
                    </span>
                    <span className="mono text-[10px] text-muted num">{cert.year}</span>
                  </div>

                  {/* Cert Title */}
                  <h3 className="serif text-lg font-medium text-ink group-hover:text-rust transition-colors duration-300 line-clamp-3">
                    {cert.title}
                  </h3>
                </div>

                {/* Card footer */}
                <div className="border-t border-ink/5 pt-3 mt-4 flex items-center justify-between text-[10px] mono text-muted">
                  <span className="truncate max-w-[150px]">{cert.issuer}</span>
                  <span className="link-underline text-rust font-semibold flex items-center gap-1">
                    <span>Inspect</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Certificate Modal */}
        <CertificateModal 
          certificate={selectedCertificate}
          onClose={() => setSelectedCertificate(null)}
        />

      </div>
    </section>
  );
}
