/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  num: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  technologies: string[];
  description: string;
  githubUrl: string;
  liveUrl?: string;
  imageSeed: string;
  metrics: { label: string; value: string }[];
  extendedDetails?: string[];
}

export interface Service {
  id: string;
  num: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: 'certification' | 'hackathon' | 'achievement';
  credentialUrl?: string;
  skillsVerified: string[];
}
