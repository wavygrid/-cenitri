import React from 'react';

export type IconProps = React.SVGProps<SVGSVGElement>;

const BaseIcon: React.FC<IconProps> = ({ className = "w-6 h-6", children, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    {children}
  </svg>
);

// --- Sovereign Design System Icons (New) ---

export const LegalScaleIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 3v18" />
    <path d="M3 7h18" />
    <path d="M6 7v3a3 3 0 0 0 6 0V7" />
    <path d="M12 7v3a3 3 0 0 0 6 0V7" />
    <path d="M7 21h10" />
  </BaseIcon>
);

export const SovereignShieldIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 18V8" opacity="0.5" />
    <path d="M8 12h8" opacity="0.5" />
  </BaseIcon>
);

export const DataSovereignIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M12 9v6" />
    <path d="M9 12h6" />
    <circle cx="12" cy="12" r="7" strokeDasharray="2 2" />
  </BaseIcon>
);

export const ZeroRetentionIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <path d="M14 2v6h6" strokeDasharray="2 2" />
    <path d="m8 13 8 8" opacity="0.5" />
    <path d="m16 13-8 8" opacity="0.5" />
  </BaseIcon>
);

export const DocumentFlowIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4 22h14a2 2 0 0 0 2-2V7.5L15.5 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z" />
    <path d="M14 2v6h6" />
    <path d="M6 18h8" />
    <path d="M6 14h12" />
  </BaseIcon>
);

export const NeuralNodeIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="3" width="6" height="6" rx="1" />
    <rect x="15" y="15" width="6" height="6" rx="1" />
    <rect x="3" y="15" width="6" height="6" rx="1" />
    <path d="M9 6h6" />
    <path d="M9 18h6" />
    <path d="M6 9v6" />
    <path d="M18 9v6" />
    <circle cx="12" cy="12" r="2" fill="currentColor" />
  </BaseIcon>
);

export const SovereignLockIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="5" y="11" width="14" height="10" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    <circle cx="12" cy="16" r="1" />
  </BaseIcon>
);

export const SecureIngestIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 2v20" />
    <path d="m17 17-5 5-5-5" />
    <rect x="4" y="2" width="16" height="6" rx="1" strokeDasharray="3 3" />
  </BaseIcon>
);

export const InfrastructureIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="2" width="20" height="6" rx="1" />
    <rect x="2" y="9" width="20" height="6" rx="1" />
    <rect x="2" y="16" width="20" height="6" rx="1" />
    <circle cx="6" cy="5" r="0.5" fill="currentColor" />
    <circle cx="6" cy="12" r="0.5" fill="currentColor" />
    <circle cx="6" cy="19" r="0.5" fill="currentColor" />
  </BaseIcon>
);

export const EphemeralIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
    <path d="M18 3l3 3" strokeDasharray="2 2" />
    <path d="M15 1l2 2" strokeDasharray="2 2" />
  </BaseIcon>
);

export const ConfidentialityIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M20 8v6" />
    <path d="M17 11h6" />
  </BaseIcon>
);

// --- Standard UI Utility Icons ---

export const ArrowRightIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4 12h16" />
    <path d="M14 6l6 6-6 6" />
  </BaseIcon>
);

export const ExternalLinkIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </BaseIcon>
);

export const ChevronDownIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="m6 9 6 6 6-6" />
  </BaseIcon>
);

export const MenuIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </BaseIcon>
);

export const CloseIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M18 6 6 18" />
    <path d="M6 6 18 18" />
  </BaseIcon>
);

export const CheckIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M20 6 9 17l-5-5" />
  </BaseIcon>
);

export const CheckCircleIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </BaseIcon>
);

export const AlertCircleIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <line x1="12" x2="12" y1="8" y2="12" />
    <line x1="12" x2="12.01" y1="16" y2="16" />
  </BaseIcon>
);

export const DocumentIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="12" y2="17" />
  </BaseIcon>
);

export const NewspaperIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
    <path d="M18 14h-8" />
    <path d="M15 18h-5" />
    <path d="M10 6h8v4h-8V6Z" />
  </BaseIcon>
);

export const ChronologyIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
    <path d="M12 2v2" strokeOpacity="0.5" />
    <path d="M12 20v2" strokeOpacity="0.5" />
    <path d="M2 12h2" strokeOpacity="0.5" />
    <path d="M20 12h2" strokeOpacity="0.5" />
  </BaseIcon>
);

export const VarianceIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </BaseIcon>
);

export const ScaleIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
    <path d="M7 21h10" />
    <path d="M12 3v18" />
    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
  </BaseIcon>
);

export const PulseIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </BaseIcon>
);

export const CloudUploadIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
    <path d="M12 12v9" />
    <path d="m16 16-4-4-4 4" />
  </BaseIcon>
);

export const CpuIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <path d="M9 1v3" />
    <path d="M15 1v3" />
    <path d="M9 20v3" />
    <path d="M15 20v3" />
    <path d="M20 9h3" />
    <path d="M20 14h3" />
    <path d="M1 9h3" />
    <path d="M1 14h3" />
  </BaseIcon>
);

export const TrashIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M3 6h18" />
    <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
    <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    <line x1="10" x2="10" y1="11" y2="17" />
    <line x1="14" x2="14" y1="11" y2="17" />
  </BaseIcon>
);

export const ShieldIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </BaseIcon>
);

export const ShieldCheckIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    <path d="m9 12 2 2 4-4" />
  </BaseIcon>
);

export const LockIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </BaseIcon>
);

export const ServerIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect width="20" height="8" x="2" y="2" rx="2" ry="2" />
    <rect width="20" height="8" x="2" y="14" rx="2" ry="2" />
    <line x1="6" x2="6.01" y1="6" y2="6" />
    <line x1="6" x2="6.01" y1="18" y2="18" />
  </BaseIcon>
);

export const LightningIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
  </BaseIcon>
);

export const DatabaseIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </BaseIcon>
);

export const FileXIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="m14.5 12.5-5 5" />
    <path d="m9.5 12.5 5 5" />
  </BaseIcon>
);

// --- Healthcare Specific Icons ---

export const StethoscopeIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
    <path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </BaseIcon>
);

export const HomeIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </BaseIcon>
);

export const UsersIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </BaseIcon>
);

export const MicroscopeIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M6 18h8" />
    <path d="M3 22h18" />
    <path d="M14 22a7 7 0 1 0 0-14h-1" />
    <path d="M9 14h2" />
    <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
    <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
  </BaseIcon>
);

export const BanIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="m4.9 4.9 14.2 14.2" />
  </BaseIcon>
);

export const ListFilterIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M3 6h18" />
    <path d="M7 12h10" />
    <path d="M10 18h4" />
  </BaseIcon>
);

export const BanknoteIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect width="20" height="12" x="2" y="6" rx="2" />
    <circle cx="12" cy="12" r="2" />
    <path d="M6 12h.01M18 12h.01" />
  </BaseIcon>
);

// --- Platform Icons ---

export const ScanIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2" />
    <path d="M17 3h2a2 2 0 0 1 2 2v2" />
    <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
    <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
  </BaseIcon>
);

export const BrainIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </BaseIcon>
);

export const FingerprintIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 12c0-3 2.5-5.5 5-5.5 4 0 4.5 5 4.5 5a6 6 0 0 1-6 6 6 6 0 0 1-6-6 4 4 0 0 1 4-4h0" />
    <path d="M12 2a10 10 0 0 0-10 10v0" />
    <path d="M12 22a10 10 0 0 1-6-1.5" />
    <path d="M12 2a10 10 0 0 1 10 10v0" />
    <path d="M12 22a10 10 0 0 0 6-1.5" />
    <path d="M12 8v8" />
  </BaseIcon>
);


// --- Social Icons ---

export const LinkedInIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </BaseIcon>
);

export const TwitterIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-12.7 12.5S.2 5 .2 5s4.2 2 7.6 1.8c0 0-.2-3 2.7-4.5 3-1.4 5 .5 6.7 1.1 1.7.5 3 .5 3 .5s-1.5 2-3.5 2.5" />
  </BaseIcon>
);

export const GithubIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </BaseIcon>
);
