/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { X, Award, ShieldCheck, Calendar, BookOpen } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  if (!certificate) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/70 backdrop-blur-sm"
      onClick={onClose}
      id="certificate-modal-overlay"
    >
      <div 
        className="relative w-full max-w-2xl bg-paper text-ink p-8 md:p-12 border-8 border-paper-dark rounded shadow-2xl modal-enter"
        onClick={(e) => e.stopPropagation()}
        id="certificate-modal-content"
      >
        {/* Frame borders */}
        <div className="absolute inset-2 border border-ink/10 pointer-events-none"></div>

        {/* Close button */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-muted hover:text-ink transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Certificate Header */}
        <div className="text-center mb-8 border-b rule pb-6">
          <div className="mono text-[10px] uppercase tracking-[0.25em] text-rust mb-2">Verification Document</div>
          <h3 className="serif text-2xl md:text-3xl font-medium tracking-tight text-ink">
            Certificate of Accomplishment
          </h3>
        </div>

        {/* Certificate Body */}
        <div className="space-y-6 text-center max-w-lg mx-auto">
          <p className="mono text-xs text-muted uppercase tracking-wider">This credential certifies that</p>
          
          <h4 className="serif text-3xl italic text-rust font-normal">Mayank Kumar</h4>
          
          <p className="text-sm leading-relaxed text-muted font-light">
            has successfully fulfilled all rigorous standards, evaluations, and coursework issued by the academic senate for:
          </p>
          
          <div className="py-4 border-y border-ink/5 bg-paper-dark/30">
            <h5 className="serif text-xl font-semibold text-ink px-4">{certificate.title}</h5>
            <div className="mono text-[10px] text-muted uppercase tracking-widest mt-1.5">{certificate.issuer}</div>
          </div>

          {/* Verification Specs */}
          <div className="grid grid-cols-2 gap-4 text-left border-t border-ink/5 pt-6 mt-6">
            <div>
              <div className="mono text-[9px] uppercase tracking-[0.15em] text-muted flex items-center gap-1.5">
                <Calendar size={12} className="text-rust" />
                <span>Issue / Status</span>
              </div>
              <div className="text-xs font-semibold text-ink mt-1 mono">{certificate.year}</div>
            </div>
            <div>
              <div className="mono text-[9px] uppercase tracking-[0.15em] text-muted flex items-center gap-1.5">
                <ShieldCheck size={12} className="text-moss" />
                <span>Issuer Authority</span>
              </div>
              <div className="text-xs font-semibold text-ink mt-1 mono">{certificate.issuer.split(' x ')[0]}</div>
            </div>
          </div>

          {/* Verified Skills */}
          <div className="text-left mt-6">
            <div className="mono text-[9px] uppercase tracking-[0.15em] text-muted flex items-center gap-1.5 mb-2.5">
              <BookOpen size={12} className="text-rust" />
              <span>Verified Domains & Technologies</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {certificate.skillsVerified.map((skill, sIdx) => (
                <span 
                  key={sIdx} 
                  className="text-[10px] mono bg-paper-dark px-2 py-0.5 rounded text-ink/80 border border-ink/5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Verification CTA */}
          {certificate.credentialUrl && (
            <div className="pt-4 border-t border-ink/5 mt-6 text-center">
              <a 
                href={certificate.credentialUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-rust text-paper rounded text-xs mono tracking-widest hover:bg-ink hover:text-paper transition-all uppercase duration-300 font-semibold"
              >
                <span>View Certificate Document</span>
                <Award size={13} />
              </a>
            </div>
          )}
        </div>

        {/* Bottom sign-off */}
        <div className="mt-10 pt-6 border-t rule flex justify-between items-end text-[10px] mono text-muted">
          <div className="flex items-center gap-2">
            <Award size={14} className="text-rust" />
            <span className="uppercase tracking-wider">Credential ID: MK-{certificate.id.toUpperCase()}</span>
          </div>
          <div className="text-right">
            <span>Verified digital ledger</span>
          </div>
        </div>

      </div>
    </div>
  );
}
