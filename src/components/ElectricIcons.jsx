import { motion } from 'framer-motion';

function ElectricIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PanelIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="6" x2="6" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="6" x2="12" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="12" x2="6" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="12" x2="12" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="6" y1="18" x2="6" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="18" x2="12" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="18" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function CircuitIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="4" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="20" cy="12" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="4" r="2" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="20" r="2" stroke="currentColor" strokeWidth="2" />
      <line x1="6" y1="12" x2="10" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="14" y1="12" x2="18" y2="12" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="6" x2="12" y2="10" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="14" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function BoltIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function GearIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MeterIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CableIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12h4M16 12h4M8 12a4 4 0 108 0 4 4 0 00-8 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function RelayIcon({ size = 24, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="7" y1="10" x2="7" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="10" x2="12" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="17" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="7" y1="14" x2="7" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="12" y1="14" x2="12" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="17" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export {
  ElectricIcon, ShieldIcon, PanelIcon, CircuitIcon, BoltIcon,
  GearIcon, MeterIcon, CableIcon, RelayIcon,
};
